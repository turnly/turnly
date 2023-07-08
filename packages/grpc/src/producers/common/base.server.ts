/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Server as gRPCServer } from '@grpc/grpc-js'
import { ExceptionHandler, Logger } from '@turnly/observability'
import * as Interceptors from 'grpcjs-interceptors'

import { Credentials } from '../../shared/credentials'
import {
  Engine,
  MiddlewareHandler,
  ServerOptions,
  Service,
} from './server-options.type'

/**
 * gRPC Server
 *
 * @description gRPC Server configuration for the gRPC presentation.
 * @author Turnly
 */
export class Server {
  /**
   * Server instance.
   *
   * @private
   * @type {Engine}
   * @memberof Server
   */
  private _server: Engine

  public constructor(private readonly options: ServerOptions) {
    this._server = Interceptors.serverProxy(new gRPCServer())
  }

  /**
   * Sets up and run the server instance.
   *
   * @memberof Server
   */
  public async setup() {
    try {
      this.setupMiddlewares(this.options.middlewares)
      this.setupServices(this.options.services)
      await this.listen(this.options.port)
    } catch (error) {
      const isTrusted = ExceptionHandler.handle(error).isTrusted()

      if (!isTrusted) process.exit(1)
    }
  }

  /**
   * Sets up services for gRPC server.
   *
   * @private
   * @memberof Server
   */
  private setupServices(services: Service[]): void {
    if (!services) throw new Error('Services are not defined')

    Logger.debug('Setting up services for gRPC server...')

    for (const service of services) {
      this._server.addService(service.definition, service.implementation)
    }
  }

  /**
   * Sets up middlewares for gRPC server.
   *
   * @private
   * @memberof Server
   */
  private setupMiddlewares(middlewares: MiddlewareHandler[] = []): void {
    if (!middlewares?.length) return

    Logger.debug('Setting up middlewares for gRPC server...')

    for (const middleware of middlewares) {
      this._server.use((...args) => middleware.execute(...args))
    }
  }

  /**
   * Listen on the given port.
   *
   * @private
   * @memberof Server
   */
  private async listen(port: number): Promise<void> {
    return new Promise(resolve => {
      if (!port) throw new Error('Port is not defined')

      const ADDRESS = `0.0.0.0:${port}`

      this._server.bindAsync(ADDRESS, Credentials.getForServer(), () => {
        this._server.start()

        Logger.info(`gRPC application successfully running on port: ${port}`)

        resolve()
      })
    })
  }
}
