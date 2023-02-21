/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { BadRequestException } from '@turnly/observability'
import { validateSync } from 'class-validator'

export const instanceValidator = <T extends object>(instance: T) => {
  const errors = validateSync(instance) || []

  if (errors?.length) {
    const message = Object.values(errors[0]?.constraints || {}).join(', ')

    throw new BadRequestException(message)
  }

  return instance
}
