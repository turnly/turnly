/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Identifier, SharedMessages } from '@turnly/common'
import { ExceptionHandler, Logger, Monitoring } from '@turnly/observability'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express, {
  Application as ExpressApp,
  NextFunction,
  Request,
  Response,
} from 'express'
import helmet from 'helmet'
import http from 'http'

import { config } from '../config'

/**
 * HTTP Server
 *
 * @description HTTP Server configuration for the REST API presentation.
 * @author Turnly
 */
export class Http {
  /**
   * Server instance.
   *
   * @private
   * @type {http.Server}
   * @memberof Server
   */
  private _httpServer: http.Server

  /**
   * Express application.
   *
   * @private
   * @type {ExpressApp}
   * @memberof Server
   */
  private _app: ExpressApp

  private routes: Record<string, express.Router>

  /**
   * Creates an instance of Server.
   *
   * @memberof Server
   */
  public constructor() {
    this._app = express()

    this._httpServer = http.createServer(this.app)
  }

  /**
   * Sets up and run the express server.
   *
   * @memberof Server
   */
  public setup() {
    try {
      this.setupCors()
      this.setupSecurityMiddleWares()
      this.setupParsers()
      this.setupCompression()
      this.setupTracing()
      this.setupRoutes()
    } catch (error) {
      if (!ExceptionHandler.handle(error).isTrusted()) process.exit(1)
    }

    return this
  }

  public setRoutes(routes: Record<string, express.Router>) {
    if (routes) this.routes = routes

    return this
  }

  /**
   * Sets up router for express.
   *
   * @private
   * @memberof Server
   */
  private setupRoutes() {
    if (this.routes) {
      for (const [key, value] of Object.entries(this.routes)) {
        this._app.use(key, value)
      }
    }
  }

  /**
   * Sets up application monitoring and error tracking.
   *
   * @memberof Server
   */
  protected setupTracing(): void {
    this._app.use((_: Request, res: Response, next: NextFunction) => {
      const { key, value } = this.getRequestId()

      res.setHeader(key, value)
      ExceptionHandler.setTag(key, value)

      next()
    })

    this._app.use(Monitoring.Monitor.requestHandler())
    this._app.use(Monitoring.Monitor.tracingHandler())
  }

  public stop(): void {
    this._httpServer.close()
  }

  /**
   * Sets up CORS for express.
   *
   * @private
   * @memberof Server
   */
  private setupCors(): void {
    this._app.use(cors())
  }

  /**
   * Sets up security middlewares for xframe and xss.
   *
   * @private
   * @memberof Server
   */
  private setupSecurityMiddleWares(): void {
    this._app.use(helmet())
  }

  /**
   * Sets up parsers for cookies, url encoded body and json body.
   *
   * @private
   * @memberof Server
   */
  private setupParsers(): void {
    this._app.use(
      express.urlencoded({
        extended: false,
        limit: config.get('server.payload_max_size'),
      })
    )

    this._app.use(
      express.json({
        limit: config.get('server.payload_max_size'),
      })
    )

    this._app.use(cookieParser())
  }

  /**
   * Sets up response compression.
   *
   * @private
   * @memberof Server
   */
  private setupCompression(): void {
    this._app.use(
      compression({
        filter: (req: Request, res: Response): boolean =>
          !req.headers['x-no-compression']
            ? compression.filter(req, res)
            : false,
      })
    )
  }

  protected getRequestId() {
    return {
      key: 'X-Request-Id',
      value: Identifier.forRequest(),
    }
  }

  /**
   * Runs the api in the configured port.
   *
   * @private
   * @memberof Server
   */
  public async listen(port: number = config.get('server.port')) {
    await new Promise<void>(resolve => {
      this._httpServer.listen(port, () => {
        Logger.info(SharedMessages.APP_READY.replace('{PORT}', port.toString()))

        resolve()
      })
    })

    return this
  }

  public get app(): ExpressApp {
    return this._app
  }

  public get httpServer(): http.Server {
    return this._httpServer
  }
}
