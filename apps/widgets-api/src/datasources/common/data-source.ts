/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache'
import { Logger } from '@turnly/common'
import { IContext } from '@types'
import {
  DataSource as ApolloDataSource,
  DataSourceConfig,
} from 'apollo-datasource'
import { KeyValueCache } from 'apollo-server-core'

export abstract class DataSource extends ApolloDataSource {
  private static readonly inMemoryCache = new InMemoryLRUCache()

  public context: IContext
  public cache!: KeyValueCache

  public constructor() {
    super()
  }

  public override initialize(config: DataSourceConfig<IContext>) {
    this.context = config.context
    this.cache = config.cache
  }

  public static getCache() {
    return DataSource.inMemoryCache
  }

  public static async invalidateQueries(key: string): Promise<string[]> {
    const keys = DataSource.getCache().keys()

    const queries = keys.filter(k =>
      k.toLowerCase().includes(key.toLowerCase())
    )

    for (const query of queries) {
      await DataSource.getCache().delete(query)

      Logger.debug(`Invalidated query ${query}`)
    }

    return queries
  }
}
