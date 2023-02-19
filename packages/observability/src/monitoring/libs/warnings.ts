/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Environment } from '@turnly/common'

import { Logger } from '../../logging'
import { config } from '../config'

for (const [key, value] of Object.entries(config)) {
  if (!value && Environment.isNotTest()) {
    Logger.warn(
      `Oops! For Observability.Monitor to work, you need to set the ${key} environment variable.`
    )
  }
}
