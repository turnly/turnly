/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Environment } from '@turnly/common'

export const tracingConfig = Object.freeze({
  NODE_ENV: Environment.getEnv(),
  FLUENT_HOST: process.env.FLUENT_HOST,
  FLUENT_PORT: process.env.FLUENT_PORT,
})
