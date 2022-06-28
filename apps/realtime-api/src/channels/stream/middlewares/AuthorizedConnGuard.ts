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
