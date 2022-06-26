import {
  BadRequestException,
  Guid,
  ResourceNotFoundException,
  UnauthorizedException,
} from '@turnly/common'
import { Events, IRealtimeClient, RealtimeMiddle } from '@turnly/realtime'

import { Integrations } from '../../services'

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
      const { origin, widgetId } = this.toParams(connection)

      if (!widgetId || !origin)
        throw new BadRequestException(
          "The request doesn't meet the parameters required for a secure connection."
        )

      const { meta, data: widget } = await Integrations.getOne({
        id: widgetId,
      })

      if (!widget) throw new ResourceNotFoundException(meta?.message)

      const { origin: formatted } = new URL(origin)
      const isTrustworthy = !widget.originsList.includes(formatted)

      if (!isTrustworthy)
        throw new UnauthorizedException(
          'You are not allowed to connect, please try again later.'
        )

      /**
       * @todo Check if customer exists in the request connection
       *
       * const customerPayload = JSON.parse(query.customer)
       * const metadata = JSON.parse(query.user)
       *
       * @todo Check if query.user is the same as the customer
       *
       * const customer = customerPayload
       *  ? await queuingService.getCustomer({ id: customerPayload.id })
       *  : await queuingService.createCustomer(metadata)
       *
       * if (!customer) {
       *    throw new Error('Customer not found')
       * }
       */

      connection.join([widget.id /* customer.id */])

      connection.emit(Events.CONNECTED, {
        widget: {
          id: widget.id,
          name: widget.name,
          canCustomize: widget.canCustomize,
        },
        customer: {},
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
    }
  }
}
