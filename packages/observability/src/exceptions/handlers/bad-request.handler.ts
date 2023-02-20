/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Response } from '@turnly/common'

import { AbstractExceptionHandler } from '../abstract-exception.handler'
import { BadRequestException } from '../exceptions'

export class BadRequestHandler<
  E = BadRequestException
> extends AbstractExceptionHandler<E> {
  public toResponse() {
    return Response.badRequest(this.message)
  }

  public isExceptionOf(): boolean {
    return this.exception instanceof BadRequestException
  }
}
