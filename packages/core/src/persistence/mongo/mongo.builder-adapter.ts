/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Logger } from '@turnly/observability'
import type {
  FilterQuery,
  QuerySelector,
  RootQuerySelector,
  SortOrder,
} from 'mongoose'

import { config } from '../../config'
import { AggregateRoot } from '../../entities/aggregate-root'
import { Filter } from '../../query-builder/filter.value-object'
import { Operator } from '../../query-builder/filter-operator.value-object'
import { Property } from '../../query-builder/query-builder'
import {
  EntityAttributes,
  QueryBuilderObject,
  Transformer,
} from '../../types/entity-attributes.type'

type MongoQuery<Entity extends AggregateRoot> = RootQuerySelector<
  Partial<EntityAttributes<Entity>>
>

type QueryObject<Entity extends AggregateRoot, V> = {
  field: Property<Entity>
  value: QuerySelector<V>
}

export class MongoBuilderAdapter<Entity extends AggregateRoot> {
  private readonly builder: MongoQuery<Entity>

  private readonly transformers: Map<
    Operator,
    Transformer<Filter<any>, QueryObject<Entity, any>>
  > = new Map<Operator, Transformer<Filter<any>, QueryObject<Entity, any>>>([
    [Operator.EQUAL, this.termsQuery],
    [Operator.NOT_EQUAL, this.notEqualQuery],
    [Operator.NULL, this.nullQuery],
    [Operator.NOT_NULL, this.notNullQuery],
    [Operator.MATCH, this.matchQuery],
    [Operator.GT, this.greaterThanQuery],
    [Operator.LT, this.lowerThanQuery],
    [Operator.GTE, this.greaterThanOrEqualQuery],
    [Operator.LTE, this.lowerThanOrEqualQuery],
    [Operator.IN, this.inQuery],
    [Operator.NOT_IN, this.notInQuery],
    [Operator.EQUAL_IN_OBJECT_ARRAY, this.equalInObjectArrayQuery],
  ])

  public constructor(private readonly query: QueryBuilderObject<Entity>) {
    this.builder = { $and: [] }
  }

  public build() {
    this.handleFilters()
    this.handleMatches()
    this.handleGeoCoordinates()

    if (config.get('observability.db_debug')) {
      Logger.debug('---------------- MongoBuilderAdapter ----------------')
      Logger.debug(JSON.stringify(this.builder, null, 2))
      Logger.debug('---------------- MongoBuilderAdapter ----------------')
    }

    return this.builder.$and?.length ? this.builder : {}
  }

  public getOrderBy() {
    return Object.fromEntries(
      this.query.orders.map(order => [
        order.orderBy.value,
        order.orderType.value as SortOrder,
      ])
    )
  }

  private handleGeoCoordinates() {
    if (this.query.geo) {
      const {
        distance: $maxDistance,
        property,
        coordinates: { lat, lng },
      } = this.query.geo

      this.builder.$and?.push({
        [property]: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [lng, lat],
            },
            $maxDistance,
          },
        },
      } as FilterQuery<Partial<EntityAttributes<Entity>>>)
    }
  }

  private handleMatches() {
    if (this.query.hasMatches) {
      const matches = this.query.matches.map(
        match =>
          ({
            [match.field.value]: new RegExp(this.query.matches[0].value, 'i'),
          } as FilterQuery<Partial<EntityAttributes<Entity>>>)
      )

      this.builder.$and?.push({ $or: matches } as FilterQuery<
        Partial<EntityAttributes<Entity>>
      >)
    }
  }

  private handleFilters() {
    if (this.query.hasFilters) {
      for (const filter of this.query.filters) {
        const { value, field } = this.queryForFilter(filter)

        this.builder.$and?.push({
          [field]: value,
        } as FilterQuery<Partial<EntityAttributes<Entity>>>)
      }
    }
  }

  private queryForFilter<V>(filter: Filter<V>): QueryObject<Entity, V> {
    const transformer = this.transformers.get(filter.operator.value)

    if (!transformer) throw Error('Transformer not found')

    return transformer(filter)
  }

  private static getField<V>(filter: Filter<V>) {
    return filter.field.value === 'id' ? '_id' : filter.field.value
  }

  private termsQuery<V>(filter: Filter<V>): QueryObject<Entity, V> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $eq: filter.value },
    }
  }

  private greaterThanQuery<V>(filter: Filter<V>): QueryObject<Entity, V> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $gt: filter.value },
    }
  }

  private lowerThanQuery<V>(filter: Filter<V>): QueryObject<Entity, V> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $lt: filter.value },
    }
  }

  private greaterThanOrEqualQuery<V>(
    filter: Filter<V>
  ): QueryObject<Entity, V> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $gte: filter.value },
    }
  }

  private lowerThanOrEqualQuery<V>(filter: Filter<V>): QueryObject<Entity, V> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $lte: filter.value },
    }
  }

  private matchQuery(filter: Filter<string>): QueryObject<Entity, string> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $regex: new RegExp(filter.value, 'i') },
    }
  }

  private notEqualQuery<V>(filter: Filter<V>): QueryObject<Entity, V> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $ne: filter.value },
    }
  }

  private notNullQuery(filter: Filter<null>): QueryObject<Entity, null> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $exists: true, $ne: null },
    }
  }

  private nullQuery(filter: Filter<null>): QueryObject<Entity, null> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $exists: true, $eq: null },
    }
  }

  private inQuery<V extends Array<any>>(
    filter: Filter<V>
  ): QueryObject<Entity, V> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $in: filter.value },
    }
  }

  private notInQuery<V extends Array<any>>(
    filter: Filter<V>
  ): QueryObject<Entity, V> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $nin: filter.value },
    }
  }

  private equalInObjectArrayQuery<V extends object>(
    filter: Filter<V>
  ): QueryObject<Entity, V> {
    return {
      field: MongoBuilderAdapter.getField(filter),
      value: { $elemMatch: { ...filter.value } as any },
    }
  }
}
