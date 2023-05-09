/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/* eslint-disable @typescript-eslint/naming-convention */
import { Guid } from '@turnly/common'
import { Document, FilterQuery, Model } from 'mongoose'

import { IEntityMapper } from '../../contracts/persistence/entity-mapper.interface'
import { IWritableRepository } from '../../contracts/repositories'
import { AggregateRoot } from '../../entities/aggregate-root'

export abstract class MongoWritableRepo<
  Entity extends AggregateRoot,
  D extends Document
> implements IWritableRepository<Entity>
{
  protected constructor(
    protected readonly model: Model<D>,
    private readonly mapper: IEntityMapper<Entity, D>
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

  protected async persist(_id: Guid, entity: Entity) {
    const doc = this.toDocument(entity)

    return this.model.findOneAndUpdate({ _id } as FilterQuery<D>, doc, {
      upsert: true,
      new: true,
    })
  }

  protected async bulk(
    entities: {
      id: Guid
      entity: Entity
    }[]
  ) {
    return this.model.bulkWrite(
      entities.map(({ id: _id, entity }) => ({
        updateOne: {
          filter: { _id } as any,
          update: this.toDocument(entity),
          upsert: true,
        },
      }))
    )
  }

  private toDocument(entity: Entity) {
    return this.mapper.toModel(entity).toObject()
  }
}
