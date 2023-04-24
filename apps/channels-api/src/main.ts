/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import dotenv from 'dotenv'
dotenv.config()

import 'Integrations/infrastructure/register-dependencies'

import { Observability } from '@turnly/common'
import { config, eventBus } from '@turnly/shared'

Observability.Tracing.Trace.initialize({ name: config.get('app.name') })

import { Application } from 'application'

async function bootstrap() {
  await new Application().setup()

  await eventBus.setup()
}

void bootstrap()
