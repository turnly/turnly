/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExceptionMessages } from '@turnly/common'

import { Exception } from './exception'

/**
 * Request Timeout
 *
 * @author Turnly
 */
export class RequestTimeoutException extends Exception {
  public constructor(
    /**
     * Error message
     *
     * @memberof Exception
     */
    message: string = ExceptionMessages.REQUEST_TIMEOUT
  ) {
    super(message)
  }
}
