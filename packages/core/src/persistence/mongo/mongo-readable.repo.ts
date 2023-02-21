/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/* eslint-disable @typescript-eslint/naming-convention */
import { FilterQuery, Model } from 'mongoose'

import { IEntityMapper } from '../../contracts/persistence/entity-mapper.interface'
import { IReadableRepository } from '../../contracts/repositories'
import { AggregateRoot } from '../../entities/aggregate-root'
import { QueryBuilderObject } from '../../types/entity-attributes.type'
import { MongoBuilderAdapter } from './mongo.builder-adapter'

export abstract class MongoReadableRepo<Entity extends AggregateRoot, D>
  implements IReadableRepository<Entity>
{
  protected constructor(
    protected readonly model: Model<D>,
    private readonly mapper: IEntityMapper<Entity, D>
  ) {}

  public async find(query: QueryBuilderObject<Entity>) {
    const mongoQuery = new MongoBuilderAdapter<Entity>(query)

    return this.mapper.toEntityList(
      await this.model
        .find(mongoQuery.build() as FilterQuery<D>)
        .populate(query.relations as string[])
        .skip(query.offset)
        .limit(query.limit)
        .sort(mongoQuery.getOrderBy())
    )
  }

  public async getOne(query: QueryBuilderObject<Entity>) {
    const mongoQuery = new MongoBuilderAdapter<Entity>(query)

    const doc = await this.model
      .findOne(mongoQuery.build() as FilterQuery<D>)
      .populate(query.relations as string[])

    return doc ? this.mapper.toEntity(doc as D) : null
  }

  public async count(query: QueryBuilderObject<Entity>) {
    const mongoQuery = new MongoBuilderAdapter<Entity>(query)

    return await this.model.countDocuments(mongoQuery.build() as FilterQuery<D>)
  }
}
