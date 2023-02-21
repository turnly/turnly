/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Response } from '@turnly/common'

/**
 * Exception Handler
 *
 * @author Turnly
 */
export abstract class AbstractExceptionHandler<E = Error> {
  protected exception: E | any

  /**
   * Capture error
   *
   * @description This method captures the exception in question, it must be called before any another.
   * @param exception Exception to handled
   */
  public capture(exception: E | any) {
    this.exception = exception

    return this
  }

  /**
   * Message
   *
   * @description Get the exception message or the same exception as string
   */
  public get message(): string {
    return this.exception?.message ?? this.exception?.toString()
  }

  /**
   * Response
   *
   * @description Convert error to formatted response object.
   */
  public abstract toResponse(): Response<unknown>

  /**
   * Instance of the exception handled
   *
   * @description Validates that the error is an instance of the exception of the current handler,
   * it is necessary to know whether to return the response of this handler.
   */
  public abstract isExceptionOf(): boolean

  /**
   * Trusted
   *
   * @description Check if it can be trusted to be an operational error
   */
  public isTrusted(): boolean {
    return true
  }
}
