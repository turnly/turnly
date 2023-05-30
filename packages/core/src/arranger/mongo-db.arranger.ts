/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { Mongoose } from 'mongoose'

import { Mongo, MongoConfig, mongoConfig } from '../persistence'
import { EnvironmentArranger } from './base.arranger'

export class MongoEnvironmentArranger extends EnvironmentArranger {
  private client: Mongoose

  public async attachClient(client?: Mongoose) {
    if (this.client) return this.client

    this.client =
      client ?? (await MongoEnvironmentArranger.connect(mongoConfig))

    return this.client
  }

  public async arrange(): Promise<void> {
    const collections = await this.getCollections()

    for (const collection of collections) {
      await this.client.connection.db.collection(collection).deleteMany({})
    }
  }

  public async close(): Promise<void> {
    const client = await this.attachClient()

    await client.connection.close()
  }

  private async getCollections(): Promise<string[]> {
    const client = await this.attachClient()

    const collections = await client.connection.db
      .listCollections(undefined, { nameOnly: true })
      .toArray()

    return collections.map(({ name }) => name)
  }

  public static async connect(config: MongoConfig): Promise<Mongoose> {
    return new Mongo().connect(config)
  }
}
