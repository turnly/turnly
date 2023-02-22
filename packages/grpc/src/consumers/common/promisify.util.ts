/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  CallbackError,
  FunctionWithCallback,
} from './promisify-client-methods.type'

export const promisify =
  <I extends any[], R>(fn: FunctionWithCallback<I, R>) =>
  (...args: I): Promise<R> =>
    new Promise((resolve, reject) => {
      fn(...args, (err: CallbackError, res: R) => {
        return err ? reject(err) : resolve(res)
      })
    })
