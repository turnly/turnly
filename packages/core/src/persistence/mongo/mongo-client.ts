/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Logger } from '@turnly/observability'
import mongoose, { Mongoose } from 'mongoose'

import { MongoConfig } from './mongo-config'

export class Mongo {
  private static instance: Mongo = new Mongo()
  private client: Mongoose

  public constructor() {
    return Mongo.instance
  }

  public async connect(config: MongoConfig) {
    if (!this.client) {
      mongoose.set('strictQuery', true)

      this.client = await mongoose.connect(config.url)
    }

    return this.client
  }

  public async disconnect() {
    if (this.client) await this.client.disconnect()
  }

  public static getConnection() {
    return Mongo.instance.client.connection
  }

  public static async session() {
    const session = await Mongo.getConnection().startSession()

    session.startTransaction()

    return session
  }

  public static isTransactionSupported() {
    return Boolean(process.env.DATABASE_TRANSACTION_ENABLED === 'true')
  }

  public static async transactional<T>(
    transaction: (session?: mongoose.ClientSession) => Promise<T>
  ) {
    if (!Mongo.isTransactionSupported()) return transaction()

    const session = await Mongo.session()
    const { id: transactionId } = session

    try {
      Logger.debug('Starting transaction...', { transactionId })

      const response = await transaction(session)

      await session.commitTransaction()

      Logger.debug('Transaction committed successfully', { transactionId })

      return response
    } catch (error) {
      await session.abortTransaction()

      Logger.debug('Transaction aborted', { transactionId })

      throw error
    } finally {
      session.endSession()
    }
  }
}
