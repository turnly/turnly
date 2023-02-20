/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import './warnings.util'

import { Tracer } from '@opentelemetry/api'

import { createTracer, InstrumentationType } from './telemetry'

export class Trace {
  private static tracer: Tracer

  private static setup(name: string, instrumentations?: InstrumentationType[]) {
    if (this.tracer) return

    this.tracer = createTracer(name, instrumentations)
  }

  public static initialize(options: {
    name: string
    instrumentations?: InstrumentationType[]
  }) {
    this.setup(options.name, options.instrumentations)

    return this
  }

  public static getTracer() {
    return this.tracer
  }
}
