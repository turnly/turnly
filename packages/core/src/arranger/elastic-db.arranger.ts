/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { Client, ClientOptions } from '@elastic/elasticsearch'

import { ElasticClient, IndexConfig } from '../persistence'
import { EnvironmentArranger } from './base.arranger'

export class ElasticEnvironmentArranger extends EnvironmentArranger {
  public constructor(private readonly client: Client) {
    super()
  }

  public async arrange(): Promise<void> {
    await this.client.deleteByQuery({
      index: '*',
      body: {
        query: {
          match_all: {},
        },
      },
      refresh: true,
    })
  }

  public async close(): Promise<void> {
    await this.client.close()
  }

  public static async connect(
    config: ClientOptions,
    indices?: IndexConfig[]
  ): Promise<Client> {
    const elastic = new ElasticClient(config)

    if (indices) {
      await elastic.indices(indices)
    }

    return elastic.getConnection()
  }
}
