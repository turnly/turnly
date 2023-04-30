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

Tracing.Trace.initialize({ name: config.get('app.name') })

/**
 * Register dependencies
 *
 * @description Register dependencies to the dependency injection container.
 */
import 'organizations/shared/register.dependency'
import 'members/shared/register.dependency'
import 'access-tokens/shared/register.dependency'

async function bootstrap() {
  const { Application } = await import('./application')

  new Application().setup()
  await eventBus.setup()
}

void bootstrap()
