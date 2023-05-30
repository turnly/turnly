/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import mongoose, { Mongoose } from 'mongoose'

import { MongoConfig } from './mongo-config'

export class MongoClient {
  private static instance: MongoClient = new MongoClient()

  private client: Mongoose

  public constructor() {
    return MongoClient.instance
  }

  public async connect(config: MongoConfig) {
    if (!this.client) mongoose.set('strictQuery', true)

    this.client = await mongoose.connect(config.url)

    return this.client
  }

  public static getConnection() {
    return this.instance.client.connection
  }
}
