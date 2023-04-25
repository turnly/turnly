/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { Event, EventType } from '@turnly/core'
import {
  BadRequestException,
  ResourceNotFoundException,
} from '@turnly/observability'
import { Events, IRealtimeClient, RealtimeMiddle } from '@turnly/realtime'

import { Customers, setOrganizationId, Widgets } from './api.service'

/**
 * Allow connection guard
 *
 * @description Authorizing connections from widget or external apps,
 * mainly validates that the connection is from a trusted origin.
 *
 * @author Turnly
 */
export class AuthGuard {
  /**
   * Middle execute
   *
   * @memberof AuthGuard
   */
  public use = (): RealtimeMiddle => async (connection, next) => {
    try {
      const { origin, widgetId, customerId } = this.toParams(connection)

      if (!widgetId || !origin)
        throw new BadRequestException(
          "The request doesn't meet the parameters required for a secure connection."
        )

      const { data: widget } = await this.getWidget(widgetId)

      if (!widget) throw new ResourceNotFoundException()

      setOrganizationId(widget.organizationId)

      const { data: customer } = customerId
        ? await Customers.getOne({ id: customerId })
        : await Customers.create({})

      if (!customer) throw new ResourceNotFoundException()

      connection.join([widget.organizationId, customer.id])

      connection.emit(
        Events.CONNECTED,
        Event.fromObject({
          type: EventType.INFO,
          name: Events.CONNECTED,
          payload: {
            widget: {
              id: widget.id,
              name: widget.name,
            },
            customer: {
              id: customer.id,
              name: customer.name,
            },
            organizationId: widget.organizationId,
          },
        })
      )

      next()
    } catch (error: any) {
      next(error)
    }
  }

  private toParams(connection: IRealtimeClient) {
    const {
      handshake: { query, headers },
    } = connection

    const origin = headers.origin || headers.referer || ''

    return {
      origin,
      widgetId: query.widgetId as Guid,
      customerId: query.customerId as Guid,
    }
  }

  private async getWidget(id: Guid) {
    const { meta, data } = await Widgets.getOne({ id })

    if (!data) throw new ResourceNotFoundException(meta?.message)

    return { data }
  }
}
