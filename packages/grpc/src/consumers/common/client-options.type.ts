/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type grpc from '@grpc/grpc-js'

export type ClientOptions = {
  address?: string
  internalAddress: string
  grpcOptions?: grpc.ClientOptions
}

export type ClientConfig = Partial<ClientOptions>
