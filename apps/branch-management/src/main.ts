/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import dotenv from 'dotenv'
dotenv.config()

import { config, eventBus } from '@turnly/core'
import { Tracing } from '@turnly/observability'

const telemetry = new Tracing.Trace({
  name: config.get('app.name'),
  instrumentations: [Tracing.InstrumentationType.GRPC],
})

telemetry.setup()

/**
 * Register dependencies
 *
 * @description Register dependencies to the dependency injection container.
 */
import 'services/shared/register.dependency'
import 'opening-hours/shared/register.dependency'
import 'locations/shared/register.dependency'

async function bootstrap() {
  const { Application } = await import('./application')

  await new Application().setup()
  await eventBus.setup()
}

void bootstrap()
