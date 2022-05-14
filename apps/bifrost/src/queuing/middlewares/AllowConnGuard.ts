import { Events, RealtimeMiddle } from '@turnly/realtime'
import {
  BadRequestException,
  ResourceNotFoundException,
  UnauthorizedException,
} from '@turnly/shared'
import { Environment } from '@turnly/shared/dist/config/environment'

import { integrations } from '../../consumers/integrations'

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
  public use = (): RealtimeMiddle => async (client, next) => {
    try {
      const {
        handshake: { query, headers, ...handshake },
      } = client

      const origin = headers.referer || handshake.url || headers.origin

      if (!query.key || !origin)
        throw new BadRequestException(
          "The request doesn't meet the parameters required for a secure connection."
        )

      const { meta, data: integration } = await integrations.getIntegration({
        id: query.key as string,
      })

      if (!integration) throw new ResourceNotFoundException(meta?.message)

      if (Environment.isNotDevelopment()) {
        const { origin: formatted } = new URL(origin)
        const isTrustworthy = !integration.originsList.includes(formatted)

        if (!isTrustworthy)
          throw new UnauthorizedException(
            'You are not allowed to connect, please try again later.'
          )
      }

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

      client.emit(Events.CONNECTED, {
        integration: { ...integration, originsList: undefined },
      })

      next()
    } catch (error: any) {
      next(error)
    }
  }
}
