/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Interface of system loggers.
 *
 * @interface ILogger
 * @author Turnly
 */
export interface ILogger {
  [key: string]: any
  /**
   * Verbose logs.
   *
   * @param {...unknown[]} data
   * @memberof ILogger
   */
  verbose(...data: unknown[]): void

  /**
   * Debugging logs.
   *
   * @param {...unknown[]} data
   * @memberof ILogger
   */
  debug(...data: unknown[]): void

  /**
   * Informational logs.
   *
   * @param {...unknown[]} data
   * @memberof ILogger
   */
  info(...data: unknown[]): void

  /**
   * Warning logs.
   *
   * @param {...unknown[]} data
   * @memberof ILogger
   */
  warn(...data: unknown[]): void

  /**
   * Error logs.
   *
   * @param {...unknown[]} data
   * @memberof ILogger
   */
  error(...data: unknown[]): void
}
