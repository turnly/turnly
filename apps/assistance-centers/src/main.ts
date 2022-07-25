/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import dotenv from 'dotenv'
dotenv.config()

import 'Services/infrastructure/register-dependencies'
import 'Locations/infrastructure/register-dependencies'

import { eventBus } from '@turnly/shared'
import { Application } from 'Application'

async function bootstrap() {
  await new Application().setup()

  await eventBus.setup()
}

void bootstrap()
