/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Response } from '@turnly/common'

import { AbstractExceptionHandler } from '../abstract-exception.handler'
import { ResourceAlreadyExistsException } from '../exceptions'

export class ResourceAlreadyExistsHandler<
  E = ResourceAlreadyExistsException
> extends AbstractExceptionHandler<E> {
  public toResponse() {
    return Response.conflict(this.message)
  }

  public isExceptionOf(): boolean {
    return this.exception instanceof ResourceAlreadyExistsException
  }
}
