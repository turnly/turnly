/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { InputValidatorException } from '@turnly/observability'
import { Schema } from 'joi'

/**
 * Validate the data schema of a method.
 *
 * @return {*}  {MethodDecorator}
 * @author Turnly
 */
export const InputValidator = (validator: Schema): MethodDecorator =>
  function (
    _target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value

    descriptor.value = async function (...args) {
      const params = args[0]
      const { error } = validator.validate(params)

      if (error) throw new InputValidatorException(error.details)

      return method.apply(this, args)
    }

    return descriptor
  }
