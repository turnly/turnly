/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import opentelemetry from '@opentelemetry/api'

import type { ILogger } from './logger.interface'
import { Winston } from './transports/winston-logger.transport'

/**
 * Logger
 *
 * @description Global service which allows to log to multiple implementations at once.
 * @author Turnly
 */
export class Loggable {
  private isLogging = true

  private loggers: ILogger[] = [new Winston().getLogger()]

  public constructor(public namespace: string) {}

  public use(loggers: ILogger[]) {
    if (loggers.length) this.loggers = loggers

    return this
  }

  /**
   * Namespace
   *
   * @description Sets the logging namespace for the current execution context.
   */
  public setNamespace(namespace: string) {
    this.namespace = namespace

    return this
  }

  /**
   * Pause logging
   *
   * @description This method stops the logging throughout the app.
   */
  public pause() {
    this.isLogging = false

    return this
  }

  /**
   * Resume logging
   *
   * @description This method resume the logging throughout the app.
   */
  public resume() {
    this.isLogging = true

    return this
  }

  public verbose(message: string, payload?: Record<string, unknown>) {
    if (this.isLogging) {
      for (const logger of this.loggers) {
        logger.verbose(this.format(message, payload))
      }
    }

    return this
  }

  public debug(message: string, payload?: Record<string, unknown>) {
    if (this.isLogging) {
      for (const logger of this.loggers) {
        logger.debug(this.format(message, payload))
      }
    }

    return this
  }

  public info(message: string, payload?: Record<string, unknown>) {
    if (this.isLogging) {
      for (const logger of this.loggers) {
        logger.info(this.format(message, payload))
      }
    }

    return this
  }

  public warn(message: string, payload?: Record<string, unknown>) {
    if (this.isLogging) {
      for (const logger of this.loggers) {
        logger.warn(this.format(message, payload))
      }
    }

    return this
  }

  public error(message: string, payload?: Record<string, unknown>) {
    if (this.isLogging) {
      for (const logger of this.loggers) {
        logger.error(this.format(message, payload))
      }
    }

    return this
  }

  private format(message: string | Error, payload?: Record<string, unknown>) {
    const namespace = this.namespace.toUpperCase()

    const output =
      message instanceof Error
        ? `🔔 [${namespace}]: ${message.message} \n ${message.stack}`
        : `🔔 [${namespace}]: ${message}`

    const context = this.getContextData(payload)

    return `${output}${context}`
  }

  private getContextData(additionalData?: Record<string, unknown>) {
    const span = opentelemetry.trace.getSpan(opentelemetry.context.active())

    const context = {}

    if (span) {
      const { traceId, spanId } = span.spanContext()

      context['tracing.traceId'] = traceId
      context['tracing.spanId'] = spanId
    }

    if (!additionalData && !Object.keys(context).length) return ''

    const data = JSON.stringify({ ...context, ...additionalData }, null, 2)

    return `\nmetadata: ${data}\n`
  }
}

export const DEFAULT_LOGGER_NAME = 'turnly'

export const Logger = new Loggable(DEFAULT_LOGGER_NAME)
