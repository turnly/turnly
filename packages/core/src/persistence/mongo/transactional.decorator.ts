/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Command } from '../../commands/base.command'
import { Mongo } from './mongo-client'

export const Transactional = function (): MethodDecorator {
  return function (
    _target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value as (...args: any[]) => Promise<void>

    descriptor.value = async function (...args) {
      const command: Command = args?.[0]

      if (typeof command !== 'object')
        throw new Error(
          'One argument is required to use @Transactional() decorator. The first argument must be a Command instance.'
        )

      return Mongo.transactional(async transaction =>
        method.apply(this, [{ ...command, transaction }, ...args.slice(1)])
      )
    }

    return descriptor
  }
}
