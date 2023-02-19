/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Response } from '@turnly/common'
import Breaker from 'opossum'

import { ExceptionHandler } from '../exception-system'
import { Logger } from '../logging'

export class CircuitBreaker<TI extends unknown[] = unknown[], TR = unknown> {
  private readonly breaker: Breaker

  public constructor(
    action: (...args: TI) => Promise<TR>,
    options?: Breaker.Options
  ) {
    this.breaker = new Breaker(action, {
      ...options,
      errorFilter: (error: Error) => ExceptionHandler.handle(error).isTrusted(),
    })

    this.setupCircuit()
    this.setupFallback()
  }

  public async execute(...args: TI): Promise<TR> {
    return (await this.breaker.fire(...args)) as Promise<TR>
  }

  private setupCircuit(): void {
    this.breaker.on('reject', () =>
      Logger.warn(
        `Oops! The ${this.breaker.name} is currently down. Trying to recover...`
      )
    )

    this.breaker.on('close', () =>
      Logger.info(
        `Ahoy! The ${this.breaker.name} is back online, resuming normal operations.`
      )
    )
  }

  private setupFallback(): void {
    this.breaker.fallback((...args: TI) => {
      const unavailable = Response.serviceUnavailable(
        `Oops! The ${this.breaker.name} is currently down. Trying to recover...`
      )

      for (const arg of args) {
        if (arg instanceof Error) {
          Logger.warn(
            `Oops, Unexpected behavior reported from ${this.breaker.name}, read the following logs for more details:`
          )

          const error = ExceptionHandler.handle(arg).toResponse()

          return this.breaker.opened ? unavailable : error
        }
      }

      return unavailable
    })
  }
}
