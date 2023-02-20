/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Client, ClientOptions } from '@elastic/elasticsearch'
import { ResponseCodes } from '@turnly/common'
import { Logger } from '@turnly/observability'

import { IndexConfig } from './elastic-types'

export class ElasticClient {
  private readonly connection: Client

  public constructor(config: ClientOptions) {
    this.connection = new Client(config)
  }

  /**
   * Indices
   *
   * @description Create an index if it doesn't exist
   * @param indexes Array of index configs
   */
  public async indices(indices: IndexConfig[]) {
    Logger.info('Creating indices in Elastic ...')

    for (const idx of indices) {
      await this.connection.indices.create(
        {
          index: idx.name,
          body: idx.configs,
        },
        {
          ignore: [ResponseCodes.BAD_REQUEST],
        }
      )
    }

    return this
  }

  public getConnection() {
    return this.connection
  }
}
