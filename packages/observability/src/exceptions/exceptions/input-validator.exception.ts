/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExceptionMessages } from '@turnly/common'

import { Exception } from './exception'

/**
 * Input Validator
 *
 * @description Error to be thrown when the current request is bad.
 * @author Turnly
 */
export class InputValidatorException extends Exception {
  public constructor(public readonly details: any[]) {
    super(ExceptionMessages.GENERIC_ERROR)
  }
}
