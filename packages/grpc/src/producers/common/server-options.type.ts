/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type grpc from '@grpc/grpc-js'
import { Server, ServerUnaryCall, status } from '@grpc/grpc-js'

import { Action, ICallback } from './request-handler.type'

export type Service = {
  definition: grpc.ServiceDefinition
  implementation: grpc.UntypedServiceImplementation
}

export abstract class ServerImplementation<T> {
  public abstract get implementation(): T
}

/**
 * RPC Types
 */
export type {
  ServerUnaryCall,
  ServiceError,
  UntypedHandleCall,
} from '@grpc/grpc-js'

export interface Context<Response, Request> {
  call: ServerUnaryCall<Request, Response>
  service: {
    path: string
    name: string
    method: string
    type: 'unary' | 'clientStream' | 'serverStream' | 'bidi'
  }
  status?: {
    code: status
    details?: string
  }
}

export interface Middleware<Response = unknown, Request = unknown> {
  (
    ctx: Context<Response, Request>,
    next: Action,
    callback: ICallback<Response>
  ): Promise<void>
}

export interface MiddlewareHandler<Response = unknown, Request = unknown> {
  execute(
    ctx: Context<Response, Request>,
    next: Action,
    callback: ICallback<Response>
  ): Promise<void>
}

export interface Engine extends Server {
  use<Request, Response>(middleware: Middleware<Request, Response>): void
}

export type ServerOptions = {
  port: number
  services: Service[]
  middlewares?: MiddlewareHandler[]
}
