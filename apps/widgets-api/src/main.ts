/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import dotenv from 'dotenv'
dotenv.config()

import { Observability } from '@turnly/common'
import { config } from '@turnly/core'

Observability.Tracing.Trace.initialize({
  name: config.get('app.name'),
  instrumentations: [Observability.Tracing.InstrumentationType.HTTP],
})

import { graph } from 'server'

async function bootstrap() {
  await graph.setup()
}

void bootstrap()
