/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import mongoose, { Mongoose } from 'mongoose'

import { MongoConfig } from './mongo-config'

export class MongoClient {
  private client: Mongoose

  public constructor(private readonly config: MongoConfig) {}

  public async connect() {
    if (!this.client) mongoose.set('strictQuery', true)

    this.client = await mongoose.connect(this.config.url)

    return this.client
  }
}
