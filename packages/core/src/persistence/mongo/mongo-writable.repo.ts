/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/* eslint-disable @typescript-eslint/naming-convention */
import { Guid } from '@turnly/common'
import { ClientSession, Document, FilterQuery, Model } from 'mongoose'

import { IEntityMapper } from '../../contracts/persistence/entity-mapper.interface'
import { IWritableRepository } from '../../contracts/repositories'
import { AggregateRoot } from '../../entities/aggregate-root'

export abstract class MongoWritableRepo<
  Entity extends AggregateRoot,
  D extends Document
> implements IWritableRepository<Entity, ClientSession>
{
  protected constructor(
    protected readonly model: Model<D>,
    private readonly mapper: IEntityMapper<Entity, D>
  ) {}

  public async save(
    entities: Entity | Entity[],
    transaction?: ClientSession
  ): Promise<void> {
    Array.isArray(entities)
      ? await this.bulk(
          entities.map(entity => ({
            id: entity.toObject().id,
            entity,
          })),
          transaction
        )
      : await this.persist(entities.toObject().id, entities, transaction)
  }

  protected async persist(
    _id: Guid,
    entity: Entity,
    transaction?: ClientSession
  ) {
    const doc = this.toDocument(entity)

    return this.model.findOneAndUpdate({ _id } as FilterQuery<D>, doc, {
      upsert: true,
      new: true,
      session: transaction,
    })
  }

  protected async bulk(
    entities: {
      id: Guid
      entity: Entity
    }[],
    transaction?: ClientSession
  ) {
    return this.model.bulkWrite(
      entities.map(({ id: _id, entity }) => ({
        updateOne: {
          filter: { _id } as any,
          update: this.toDocument(entity),
          upsert: true,
        },
      })),
      {
        session: transaction,
      }
    )
  }

  private toDocument(entity: Entity) {
    return this.mapper.toModel(entity).toObject()
  }
}
