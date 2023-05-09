/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Environment } from '@turnly/common'
import fluentLogger from 'fluent-logger'
import winston from 'winston'

import type { ILogger } from '../logger.interface'
import { getLoggingLevel } from '../logger-options.util'

const FluentTransport = fluentLogger.support.winstonTransport()

/**
 * Winston logger.
 *
 * @implements {ILogger}
 * @author Turnly
 */
export class Winston {
  private readonly logger: ILogger
  private readonly fluent: any

  private readonly levels = {
    verbose: 1,
    debug: 2,
    info: 3,
    warn: 4,
    error: 5,
  }

  public constructor() {
    if (process.env.FLUENT_HOST) {
      this.fluent = new FluentTransport(
        `${process.env.APP_NAME}.${Environment.getEnv()}.turnly`,
        {
          host: process.env.FLUENT_HOST,
          port: process.env.FLUENT_PORT,
          timeout: 3.0,
          requireAckResponse: true,
        }
      )
    }

    this.logger = this.getWinstonLoggerInstance()

    if (this.fluent) {
      this.logger.on('finish', () => {
        this.fluent.sender.end('end', {})
      })
    }
  }

  public getLogger(): ILogger {
    return this.logger
  }

  private getTransports() {
    const transports: any[] = [
      new winston.transports.Console({
        level: 'error',
        handleExceptions: true,
      }),
    ]

    if (process.env.FLUENT_HOST) transports.push(this.fluent)

    return transports
  }

  private getWinstonLoggerInstance(): ILogger {
    return winston.createLogger({
      level: getLoggingLevel(),
      format: this.getFormat(),
      levels: this.levels,
      transports: this.getTransports(),
    })
  }

  private getFormat() {
    if (process.env.LOGGING_FORMAT === 'json') {
      return winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    }

    return winston.format.combine(
      winston.format.prettyPrint(),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.colorize(),
      winston.format.simple()
    )
  }
}
