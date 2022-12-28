/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import dotenv from 'dotenv'
dotenv.config()

import { Observability } from '@turnly/common'
import { config } from '@turnly/shared'

Observability.Tracing.Trace.initialize({
  name: config.get('app.name'),
  instrumentations: [Observability.Tracing.InstrumentationType.HTTP],
})

import { Application } from 'Application'

async function bootstrap() {
  await new Application().setup()
}

void bootstrap()
