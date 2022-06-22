import { Application } from 'Application'

async function bootstrap() {
  await new Application().setup()
}

void bootstrap()
