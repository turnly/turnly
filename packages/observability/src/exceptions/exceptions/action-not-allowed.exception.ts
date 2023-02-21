/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExceptionMessages } from '@turnly/common'

import { Exception } from './exception'

/**
 * Action Not Allowed
 *
 * @author Turnly
 */
export class ActionNotAllowedException extends Exception {
  public constructor(
    /**
     * Error message
     *
     * @memberof Exception
     */
    message: string = ExceptionMessages.ACTION_NOT_ALLOWED
  ) {
    super(message)
  }
}
