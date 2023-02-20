/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Response } from '@turnly/common'

import { AbstractExceptionHandler } from '../abstract-exception.handler'
import { InputValidatorException } from '../exceptions'

export class InputValidatorHandler<
  E = InputValidatorException
> extends AbstractExceptionHandler<E> {
  public toResponse() {
    const details = (this.exception as InputValidatorException)?.details?.map(
      ({ message, context }) => ({
        parameter: context?.key as string,
        message: message.replace(/\"/g, '') as string,
      })
    )

    return Response.badRequest(this.message, details)
  }

  public isExceptionOf(): boolean {
    return this.exception instanceof InputValidatorException
  }
}
