/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import 'Agents/infrastructure/register-dependencies'

import { eventBus } from '@turnly/shared'
import { Application } from 'Application'

async function bootstrap() {
  await new Application().setup()

  await eventBus.setup()
}

void bootstrap()
