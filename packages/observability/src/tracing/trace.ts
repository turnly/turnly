/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import './warnings.util'

import {
  diag,
  DiagConsoleLogger,
  DiagLogLevel,
  metrics,
} from '@opentelemetry/api'
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-grpc'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc'
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin'
import {
  Instrumentation as InstrumentationType,
  registerInstrumentations,
} from '@opentelemetry/instrumentation'
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express'
import { GraphQLInstrumentation } from '@opentelemetry/instrumentation-graphql'
import { GrpcInstrumentation } from '@opentelemetry/instrumentation-grpc'
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http'
import { Resource } from '@opentelemetry/resources'
import {
  ConsoleMetricExporter,
  MeterProvider,
  PeriodicExportingMetricReader,
} from '@opentelemetry/sdk-metrics'
import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
  NodeTracerProvider,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-node'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { SocketIoInstrumentation } from 'opentelemetry-instrumentation-socket.io'

import { getLoggingLevel } from '../logging/logger-options.util'
import { defaultOptions } from './default-options.const'
import {
  Instrumentation,
  TraceOptions,
  TracingExporterType,
} from './tracing.enum'

export class Trace {
  private readonly options: TraceOptions

  public constructor(options: Partial<TraceOptions>) {
    this.options = { ...defaultOptions, ...options }

    const level = getLoggingLevel().toUpperCase()

    diag.setLogger(
      new DiagConsoleLogger(),
      DiagLogLevel[level] ?? DiagLogLevel.INFO
    )
  }

  public setup() {
    const resource = Resource.default().merge(
      new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: this.getServiceName(),
      })
    )

    this.setTracing(resource)
    this.setMetrics(resource)
  }

  private setMetrics(resource: Resource) {
    const provider = new MeterProvider({ resource })

    const exporter = this.getMetricsExporter()

    provider.addMetricReader(
      new PeriodicExportingMetricReader({
        exporter,
        exportIntervalMillis: 6000,
      })
    )

    metrics.setGlobalMeterProvider(provider)
  }

  private setTracing(resource: Resource) {
    const instrumentations = this.getInstrumentations()

    registerInstrumentations({ instrumentations })

    const provider = new NodeTracerProvider({ resource })

    const exporter = this.getTracingExporter()

    const processor =
      process.env.TRACING_PROCESSOR === 'simple'
        ? new SimpleSpanProcessor(exporter)
        : new BatchSpanProcessor(exporter)

    provider.addSpanProcessor(processor)

    provider.register()
  }

  private getMetricsExporter() {
    const url = this.getEndpoint()

    const { type } = this.options

    if (url && type === TracingExporterType.OTLP) {
      return new OTLPMetricExporter({ url })
    }

    return new ConsoleMetricExporter()
  }

  private getTracingExporter() {
    const url = this.getEndpoint()

    const { type } = this.options

    if (url && type === TracingExporterType.OTLP) {
      return new OTLPTraceExporter({ url })
    }

    if (url && type === TracingExporterType.ZIPKIN) {
      return new ZipkinExporter({ url })
    }

    return new ConsoleSpanExporter()
  }

  private getServiceName(): string {
    return this.options.name ?? 'turnly'
  }

  private getEndpoint(): string {
    return String(process.env.TRACING_GRPC_ENDPOINT)
  }

  private getInstrumentations() {
    const instrumentations: InstrumentationType[] = []

    for (const instrumentation of this.options.instrumentations) {
      if (instrumentation === Instrumentation.GRPC) {
        instrumentations.push(...this.getGrpcInstrumentations())
      }

      if (instrumentation === Instrumentation.REALTIME) {
        instrumentations.push(...this.getRealtimeInstrumentations())
      }

      if (instrumentation === Instrumentation.GRAPHQL) {
        instrumentations.push(...this.getGraphInstrumentations())
      }

      if (instrumentation === Instrumentation.GATEWAY) {
        instrumentations.push(...this.getGatewayInstrumentations())
      }
    }

    return instrumentations
  }

  private getGrpcInstrumentations() {
    return [new GrpcInstrumentation()]
  }

  private getRealtimeInstrumentations() {
    return [this.getHttpInstrumentation(), new SocketIoInstrumentation()]
  }

  private getGraphInstrumentations() {
    return [
      this.getHttpInstrumentation(),
      new ExpressInstrumentation(),
      new GraphQLInstrumentation({ allowValues: true, depth: 10 }),
    ]
  }

  private getGatewayInstrumentations() {
    return [this.getHttpInstrumentation(), new ExpressInstrumentation()]
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
}
