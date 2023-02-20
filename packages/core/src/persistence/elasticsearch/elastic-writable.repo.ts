/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/* eslint-disable @typescript-eslint/naming-convention */
import { Guid } from '@turnly/common'

import { AggregateRoot } from '../../entities/aggregate-root'
import { EntityAttributes } from '../../types/entity-attributes.type'
import { ElasticClient } from './elastic-client'

export abstract class ElasticWritableRepo<Entity extends AggregateRoot> {
  public constructor(
    private readonly elasticClient: ElasticClient,
    private readonly index: string
  ) {}

  public async save(entities: Entity | Entity[]): Promise<void> {
    Array.isArray(entities)
      ? await this.bulk(
          entities.map(entity => ({
            id: entity.toObject().id,
            entity,
          }))
        )
      : await this.persist(entities.toObject().id, entities)
  }

  protected async persist(id: Guid, entity: Entity) {
    return await this.elasticClient.getConnection().index({
      index: this.index,
      id,
      body: this.toDocument(entity),
      refresh: 'wait_for',
    })
  }

  protected async bulk(
    entities: {
      id: Guid
      entity: Entity
    }[]
  ) {
    const body = entities.flatMap(({ entity, id: _id }) => [
      { index: { _index: this.index, _id } },
      this.toDocument(entity),
    ])

    return await this.elasticClient.getConnection().bulk({
      body,
      refresh: 'wait_for',
    })
  }

  private toDocument(entity: Entity): EntityAttributes<Entity> {
    return { ...entity.toObject(), id: undefined }
  }
}
