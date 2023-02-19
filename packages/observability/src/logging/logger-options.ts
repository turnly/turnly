/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { LoggingLevel } from './logging-level'

export const getLoggingLevel = (
  level = process.env.LOGGING_LEVEL as string
) => {
  if (level) {
    const isLevel = Object.values(LoggingLevel).includes(level as LoggingLevel)

    return isLevel ? level : LoggingLevel.INFO
  }

  return LoggingLevel.INFO
}
