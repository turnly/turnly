/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ActionNotAllowedException } from '@turnly/common'
import { IRealtimeClient, RealtimeMiddle } from '@turnly/realtime'

/**
 * Allow connection guard
 *
 * @description Authorizing connections from microservices.
 * @author Turnly
 */
export class AuthorizedConnGuard {
  /**
   * Middle execute
   *
   * @memberof InternalConnGuard
   */
  public use = (): RealtimeMiddle => async (connection, next) => {
    try {
      throw new ActionNotAllowedException(
        'The streaming channel is temporarily unavailable.'
      )

      /**
       * @todo Implement authorization
       */
      next()
    } catch (error: any) {
      next(error)
    }
  }

  private toParams(connection: IRealtimeClient) {
    const {
      handshake: { headers },
    } = connection

    return {
      authorization: headers.authorization || '',
    }
  }
}
