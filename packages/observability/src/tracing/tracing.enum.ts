/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export enum Instrumentation {
  GRPC = 'grpc',
  REALTIME = 'realtime',
  GRAPHQL = 'graphql',
  GATEWAY = 'graphql_gateway',
}

export enum TracingExporterType {
  OTLP = 'otlp',
  ZIPKIN = 'zipkin',
  CONSOLE = 'console',
}

export type TraceOptions = {
  name?: string
  type: TracingExporterType
  instrumentations: Instrumentation[]
}
