/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Environment } from '@turnly/common'

import { Logger } from '../logging'
import { tracingConfig } from './config.const'

for (const [key, value] of Object.entries(tracingConfig)) {
  if (key === 'NODE_ENV' && !value) {
    throw new Error(
      'Oops! Missing NODE_ENV in your environment variables, please configure it.'
    )
  }

  if (!value && Environment.isNotTest()) {
    Logger.warn(
      `Oops! For Observability.Trace to work, you need to set the ${key} environment variable.`
    )
  }
}
