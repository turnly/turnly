/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { ServiceError } from '@grpc/grpc-js'
import type { Nullable } from '@turnly/common'

import { Meta } from '../queuing-system'

export interface ICallback<R> {
  (error: Nullable<ServiceError>, response: Nullable<R>): void
}

export type Action = (...params: unknown[]) => Promise<void>

export type Constructor<T> = { new (...args): T }

export interface ICallResponse {
  setMeta(value: Meta): ICallResponse
}
