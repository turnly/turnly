/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Exception } from '@turnly/observability/dist/exceptions/exceptions/exception'

export class InvalidArgumentError extends Exception {
  public constructor(message: string) {
    super(message)
  }
}
