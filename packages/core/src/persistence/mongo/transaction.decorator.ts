/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Logger } from '@turnly/observability'
import mongoose from 'mongoose'

import { Command } from '../../commands/base.command'

export const Transaction = function (): MethodDecorator {
  return function (
    _target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value as (...args: any[]) => Promise<void>

    descriptor.value = async function (...args) {
      const command: Command = args?.[0]

      if (!command) throw new Error('Missing command argument')

      if (typeof command !== 'object')
        throw new Error('Invalid command argument')

      const transaction = await mongoose.startSession()

      try {
        Logger.debug('Starting transaction...')

        transaction.startTransaction()

        /**
         * Append transaction to command arguments so that it can be used in the command handler
         */
        args[0] = { ...command, transaction }

        const response = await method.apply(this, args)

        await transaction.commitTransaction()

        const { id: transactionId } = transaction

        Logger.debug('Transaction committed successfully', { transactionId })

        return response
      } catch (error) {
        await transaction.abortTransaction()

        Logger.debug('Transaction aborted')

        throw error
      } finally {
        transaction.endSession()
      }
    }

    return descriptor
  }
}
