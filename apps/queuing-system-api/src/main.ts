/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import dotenv from 'dotenv'
dotenv.config()

import { config } from '@turnly/core'
import { Tracing } from '@turnly/observability'

Tracing.Trace.initialize({
  name: config.get('app.name'),
  instrumentations: [Tracing.InstrumentationType.HTTP],
})

import { graph } from 'server'

async function bootstrap() {
  await graph.setup()
}

void bootstrap()
