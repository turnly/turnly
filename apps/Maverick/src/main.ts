import 'Integrations/infrastructure/register-dependencies'

import { eventBus } from '@turnly/core'
import { Application } from 'Application'

async function bootstrap() {
  await new Application().setup()

  await eventBus.setup()
}

void bootstrap()
