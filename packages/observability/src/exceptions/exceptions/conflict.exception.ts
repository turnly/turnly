/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Exception } from './exception'

/**
 * Conflict
 *
 * @author Turnly
 */
export class ConflictException extends Exception {
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
