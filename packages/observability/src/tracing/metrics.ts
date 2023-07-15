/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-grpc'
import { MeterProvider } from '@opentelemetry/sdk-metrics'
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node'

export class Metrics {
  public constructor(
    private readonly url: string = String(process.env.TRACING_GRPC_ENDPOINT)
  ) {}

  private getExporter() {
    if (this.url) return new OTLPMetricExporter({ url: this.url })

    return new ConsoleSpanExporter()
  }

  public getProvider() {
    return new MeterProvider({})
  }
}
