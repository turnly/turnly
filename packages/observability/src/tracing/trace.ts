/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import './warnings.util'

import { Tracer } from '@opentelemetry/api'
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http'
import {
  Instrumentation,
  registerInstrumentations,
} from '@opentelemetry/instrumentation'
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express'
import { GraphQLInstrumentation } from '@opentelemetry/instrumentation-graphql'
import { GrpcInstrumentation } from '@opentelemetry/instrumentation-grpc'
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http'
import { JaegerPropagator } from '@opentelemetry/propagator-jaeger'
import { Resource } from '@opentelemetry/resources'
import {
  BatchSpanProcessor,
  NodeTracerProvider,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-node'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { SocketIoInstrumentation } from 'opentelemetry-instrumentation-socket.io'

import { getLoggingLevel } from '../logging/logger-options.util'

export enum InstrumentationType {
  GRPC = 'grpc',
  REALTIME = 'realtime',
  GRAPHQL = 'graphql',
  GATEWAY = 'graphql_gateway',
}

export type TraceOptions = {
  name?: string
  instrumentations: InstrumentationType[]
}

export class Trace {
  private readonly tracer: Tracer

  private readonly options: TraceOptions = {
    name: process.env.APP_NAME as string,
    instrumentations: [InstrumentationType.GRPC, InstrumentationType.GRAPHQL],
  }

  public constructor(options: TraceOptions) {
    this.options = { ...this.options, ...options }

    this.setLogger()
  }

  public setup() {
    this.registerInstrumentations()

    const resource = new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: this.options.name,
    })

    const provider = new NodeTracerProvider({
      resource: Resource.default().merge(resource),
    })

    if (process.env.TRACING_ENDPOINT) {
      const exporter = new OTLPTraceExporter({
        url: process.env.TRACING_ENDPOINT,
      })

      const processor =
        process.env.TRACING_PROCESSOR === 'simple'
          ? new SimpleSpanProcessor(exporter)
          : new BatchSpanProcessor(exporter)

      provider.addSpanProcessor(processor)
    }

    const propagator = new JaegerPropagator(process.env.TRACING_TRACE_HEADER)
    provider.register({ propagator })
  }

  private registerInstrumentations() {
    const instrumentations: Instrumentation[] = []

    for (const instrumentation of this.options.instrumentations) {
      if (instrumentation === InstrumentationType.GRPC) {
        instrumentations.push(new GrpcInstrumentation())
      }

      if (instrumentation === InstrumentationType.REALTIME) {
        instrumentations.push(this.getHttpInstrumentation())
        instrumentations.push(new SocketIoInstrumentation())
      }

      if (instrumentation === InstrumentationType.GRAPHQL) {
        instrumentations.push(this.getHttpInstrumentation())
        instrumentations.push(new ExpressInstrumentation())
        instrumentations.push(
          new GraphQLInstrumentation({ allowValues: true, depth: 10 })
        )
      }

      if (instrumentation === InstrumentationType.GATEWAY) {
        instrumentations.push(this.getHttpInstrumentation())
        instrumentations.push(new ExpressInstrumentation())
      }
    }

    registerInstrumentations({ instrumentations })
  }

  private getHttpInstrumentation() {
    const __REQ_ID__ = 'x-request-id'

    return new HttpInstrumentation({
      headersToSpanAttributes: {
        client: {
          requestHeaders: [__REQ_ID__],
          responseHeaders: [__REQ_ID__],
        },
        server: {
          requestHeaders: [__REQ_ID__],
          responseHeaders: [__REQ_ID__],
        },
      },
    })
  }

  private setLogger() {
    const level = getLoggingLevel().toUpperCase()

    diag.setLogger(
      new DiagConsoleLogger(),
      DiagLogLevel[level] ?? DiagLogLevel.INFO
    )
  }

  public getTracer() {
    return this.tracer
  }
}
