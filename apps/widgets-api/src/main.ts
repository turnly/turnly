/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import dotenv from 'dotenv'
dotenv.config()

import { Application } from 'Application'

async function bootstrap() {
  await new Application().setup()
}

void bootstrap()
