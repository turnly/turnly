/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Exception } from './exception'

/**
 * Bad Request
 *
 * @author Turnly
 */
export class BadRequestException extends Exception {
  public constructor(
    /**
     * Error message
     *
     * @memberof Exception
     */
    message: string
  ) {
    super(message)
  }
}
