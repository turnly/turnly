/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Exception } from '@turnly/common/dist/observability/exception-system/exceptions/Exception'

export class InvalidArgumentError extends Exception {
  public constructor(message: string) {
    super(message)
  }
}
