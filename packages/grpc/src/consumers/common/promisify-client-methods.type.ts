/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { ServiceError } from '@grpc/grpc-js'

export type CallbackError = ServiceError | null
export type Callback<R> = (err: CallbackError, res: R) => any

export type FunctionWithCallback<T extends any[], R> = (
  ...args: [...T, Callback<R>]
) => any
