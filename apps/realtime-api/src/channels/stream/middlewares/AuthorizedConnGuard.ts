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
       *
       * @description Authorizing connections from microservices.
       * We need to create a utility that allows creating signed tokens (JWT)
       * for the authorization of connections to realtime API.
       *
       * Only accept connections from the internal network
       * const { authorization } = this.toParams(connection)
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
