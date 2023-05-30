/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import mongoose, { Connection, Mongoose } from 'mongoose'

import { MongoConfig } from './mongo-config'

export class MongoClient {
  private static readonly DEFAULT_NAME = 'default'

  private static instance: MongoClient = new MongoClient()
  private connections: { [K: string]: Connection } = {}

  private client: Mongoose

  public constructor() {
    return MongoClient.instance
  }

  public async connect(config: MongoConfig) {
    if (!this.client) {
      mongoose.set('strictQuery', true)

      this.client = await mongoose.connect(config.url)

      this.setConnection(this.client.connection)
    }

    return this.client
  }

  public setConnection(
    connection: Connection,
    connectionName = MongoClient.DEFAULT_NAME
  ) {
    this.connections[connectionName] = connection
  }

  public getConnection(connectionName: string = MongoClient.DEFAULT_NAME) {
    return this.connections[connectionName]
  }
}
