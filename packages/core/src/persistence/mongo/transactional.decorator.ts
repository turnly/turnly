/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { Command } from '../../commands/base.command'
import { Transaction } from '../../types/transaction.type'
import { Mongo } from './mongo-client'

const merge = (args: unknown[], transaction?: Transaction) => {
  if (!transaction) return args

  if (!args.length)
    throw new Error(
      'Oops! You are trying to use @Transactional() decorator without arguments. Please, add the Command instance as the first argument.'
    )

  args[1] = transaction

  return args
}

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

      const session: Transaction = args?.[1]

      const isSession = Boolean(
        session && session['inTransaction'] !== undefined
      )

      if (isSession) return method.apply(this, args)

      if (session)
        throw new Error(
          'Oops! You are trying to use @Transactional() decorator with a non-transactional session. Please, remove the second argument.'
        )

      return Mongo.transactional(async transaction =>
        method.apply(this, merge(args, transaction))
      )
    }

    return descriptor
  }
}
