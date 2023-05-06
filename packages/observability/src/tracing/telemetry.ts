/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import opentelemetry from '@opentelemetry/api'
import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api'
import { JaegerExporter } from '@opentelemetry/exporter-jaeger'
import { registerInstrumentations } from '@opentelemetry/instrumentation'
import { GrpcInstrumentation } from '@opentelemetry/instrumentation-grpc'
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http'
import { Resource } from '@opentelemetry/resources'
import {
  BatchSpanProcessor,
  ConsoleSpanExporter,
} from '@opentelemetry/sdk-trace-base'
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node'
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions'
import { SocketIoInstrumentation } from 'opentelemetry-instrumentation-socket.io'

import { getLoggingLevel } from '../logging/logger-options.util'

export enum InstrumentationType {
  GRPC = 'grpc',
  HTTP = 'http',
  REALTIME = 'realtime',
}

const getLevel = (): DiagLogLevel => {
  const level = getLoggingLevel().toUpperCase()

  return DiagLogLevel[level] || DiagLogLevel.INFO
}

diag.setLogger(new DiagConsoleLogger(), getLevel())

export const createTracer = (
  name: string,
  instrumentations: InstrumentationType[] = [InstrumentationType.GRPC]
) => {
  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: name,
    }),
  })

  const exporter = process.env.TRACING_ENDPOINT
    ? new JaegerExporter({ endpoint: process.env.TRACING_ENDPOINT })
    : new ConsoleSpanExporter()

  provider.addSpanProcessor(new BatchSpanProcessor(exporter))

  provider.register()

  const headersToAttach = ['x-request-id']

  const instrumentationsToRegister = {
    [InstrumentationType.GRPC]: new GrpcInstrumentation(),
    [InstrumentationType.HTTP]: new HttpInstrumentation({
      headersToSpanAttributes: {
        client: {
          responseHeaders: headersToAttach,
        },
        server: {
          responseHeaders: headersToAttach,
        },
      },
    }),
    [InstrumentationType.REALTIME]: new SocketIoInstrumentation(),
  }

  registerInstrumentations({
    instrumentations: instrumentations.map(
      instrumentation => instrumentationsToRegister[instrumentation]
    ),
    tracerProvider: provider,
  })

  return opentelemetry.trace.getTracer('turnly')
}
