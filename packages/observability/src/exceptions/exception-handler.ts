/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import * as Sentry from '@sentry/node'
import { Environment, Response } from '@turnly/common'

import { DEFAULT_LOGGER_NAME, Logger } from '../logging'
import { AbstractExceptionHandler } from './abstract-exception.handler'
import { handlers } from './handlers'
/**
 * Exception Handler
 *
 * @description Abstraction to handle application errors,
 * use it to write all your exception rules in one central place.
 *
 * @author Turnly
 */
export class ExceptionHandler {
  private static namespace: string = DEFAULT_LOGGER_NAME
  private static handlers: AbstractExceptionHandler[] = handlers

  private constructor(private readonly error: any) {}

  /**
   * Check if it can be trusted to be an operational error
   *
   * @memberof ExceptionHandler
   */
  public isTrusted(): boolean {
    for (const handler of ExceptionHandler.handlers) {
      if (handler.capture(this.error).isExceptionOf()) {
        return handler.isTrusted()
      }
    }

    return this.error?.isOperational
  }

  /**
   * Convert the error to a valid, formatted Response.
   *
   * @memberof ExceptionHandler
   */
  public toResponse(): Response<unknown> {
    for (const handler of ExceptionHandler.handlers) {
      if (handler.capture(this.error).isExceptionOf()) {
        return handler.toResponse()
      }
    }

    return Response.error(
      Environment.isNotProduction() ? this.error?.message : null
    )
  }

  /**
   * Use to set the namespace of the exception handler.
   *
   * @memberof ExceptionHandler
   */
  public static setNamespace(namespace: string) {
    this.namespace = namespace

    Logger.setNamespace(this.namespace)

    return this
  }

  /**
   * Register the exception handling.
   *
   * @memberof ExceptionHandler
   */
  public static register(handlers: AbstractExceptionHandler[]) {
    this.handlers = [...this.handlers, ...handlers]

    Logger.info(`Registered ${this.handlers.length} exception handlers`)

    return this
  }

  public static captureException(error: Error) {
    Sentry.captureException(error)
  }

  public static setTag(key: string, value: string) {
    Sentry.configureScope(scope => scope.setTag(key, value))
  }

  public static setUser(user: Sentry.User | null) {
    Sentry.configureScope(scope => scope.setUser(user))
  }

  /**
   * Get an instance of the ExceptionHandler and process your error
   *
   * @memberof ExceptionHandler
   */
  public static handle(error: any): ExceptionHandler {
    if (this.namespace === DEFAULT_LOGGER_NAME && Environment.isNotTest()) {
      Logger.warn(
        'You are using the default logger name, please set a namespace. e.g ExceptionHandler.setNamespace("my-service")'
      )
    }

    const handled = new ExceptionHandler(error)

    if (!handled.isTrusted()) {
      Logger.error(error)

      this.captureException(error)
    }

    return handled
  }
}

process.on('unhandledRejection', (error: Error) =>
  ExceptionHandler.handle(error)
)

process.on('uncaughtException', (error: Error) =>
  ExceptionHandler.handle(error)
)
