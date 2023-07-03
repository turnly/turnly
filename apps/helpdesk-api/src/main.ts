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

const telemetry = new Tracing.Trace({
  name: config.get('app.name'),
  instrumentations: [Tracing.InstrumentationType.GRAPHQL],
})

telemetry.setup()

import { graph } from 'server'

async function bootstrap() {
  await graph.setup()
}

void bootstrap()
