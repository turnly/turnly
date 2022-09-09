/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  BadRequestException,
  Guid,
  ResourceNotFoundException,
  UnauthorizedException,
} from '@turnly/common'
import { Events, IRealtimeClient, RealtimeMiddle } from '@turnly/realtime'

import { Customers, Integrations, setOrganizationId } from '../../../shared/api'

/**
 * Allow connection guard
 *
 * @description Authorizing connections from widget or external apps,
 * mainly validates that the connection is from a trusted origin.
 *
 * @author Turnly
 */
export class AllowConnGuard {
  /**
   * Middle execute
   *
   * @memberof AllowConnGuard
   */
  public use = (): RealtimeMiddle => async (connection, next) => {
    try {
      const { origin, widgetId, customerId } = this.toParams(connection)

      if (!widgetId || !origin)
        throw new BadRequestException(
          "The request doesn't meet the parameters required for a secure connection."
        )

      const { meta, data: widget } = await Integrations.getOne({
        id: widgetId,
      })

      if (!widget) throw new ResourceNotFoundException(meta?.message)

      setOrganizationId(widget.organizationId)

      const { origin: formatted } = new URL(origin)
      const isTrustworthy = !widget.originsList.includes(formatted)

      if (!isTrustworthy)
        throw new UnauthorizedException(
          'You are not allowed to connect, please try again later.'
        )

      const { data: customer } = customerId
        ? await Customers.getOne({ id: customerId })
        : await Customers.create({})

      if (!customer) throw new ResourceNotFoundException()

      connection.join([widget.organizationId, customer.id])

      connection.emit(Events.CONNECTED, {
        widget: {
          id: widget.id,
          name: widget.name,
          canCustomize: widget.canCustomize,
        },
        customer: {
          id: customer.id,
          name: customer.name,
        },
      })

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
}
