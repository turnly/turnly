/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Instrumentation,
  TraceOptions,
  TracingExporterType,
} from './tracing.enum'

export const defaultOptions: TraceOptions = {
  name: process.env.APP_NAME as string,
  type: process.env.TRACING_EXPORTER as TracingExporterType,
  instrumentations: [Instrumentation.GRPC, Instrumentation.GRAPHQL],
}
