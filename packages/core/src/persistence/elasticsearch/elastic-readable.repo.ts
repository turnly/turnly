/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/* eslint-disable @typescript-eslint/naming-convention */
import type { SearchHit } from '@elastic/elasticsearch/api/types'
import { ResponseCodes } from '@turnly/common'

import {
  AggregateRoot,
  EntityAttributes,
  QueryBuilderObject,
} from '../../../domain'
import { ElasticBuilderAdapter } from './elastic.builder-adapter'
import { ElasticClient } from './elastic-client'

export abstract class ElasticReadableRepo<Entity extends AggregateRoot> {
  public constructor(
    private readonly elasticClient: ElasticClient,
    private readonly index: string
  ) {}

  protected async search(
    query: QueryBuilderObject<Entity>,
    mapper: <D = any>(data: D) => Entity
  ): Promise<Entity[]> {
    const body = new ElasticBuilderAdapter<Entity>(query).build()

    const res = await this.elasticClient
      .getConnection()
      .search<EntityAttributes<Entity>>(
        {
          index: this.index,
          body,
        },
        {
          ignore: [ResponseCodes.NOT_FOUND],
        }
      )

    return res.body.hits.hits.map((hit: SearchHit<any>) =>
      mapper({ ...hit?._source })
    )
  }

  protected async countByQuery(query: QueryBuilderObject<Entity>) {
    const body = new ElasticBuilderAdapter<Entity>(query).build()

    return await this.elasticClient
      .getConnection()
      .count<EntityAttributes<Entity>>(
        {
          index: this.index,
          body,
        },
        {
          ignore: [ResponseCodes.NOT_FOUND],
        }
      )
  }
}
