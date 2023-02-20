/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { Logger } from '@turnly/common'
import bodybuilder from 'bodybuilder'

import { config } from '../../config'
import { AggregateRoot } from '../../entities/aggregate-root'
import { Filter } from '../../query-builder/filter.value-object'
import { Operator } from '../../query-builder/filter-operator.value-object'
import { QueryBuilderObject, Transformer } from '../../types/entity-attributes.type'

export enum TypeQueryEnum {
  TERMS = 'terms',
  MATCH_ALL = 'match_all',
  MATCHES = 'multi_match',
  RANGE = 'range',
  WILDCARD = 'wildcard',
  NESTED = 'nested',
  GEO_DISTANCE = 'geo_distance',
}

type QueryObject = {
  type: TypeQueryEnum
  field: string
  value:
    | string
    | object
    | number
    | boolean
    | Date
    | Array<any>
    | null
    | undefined
}

export class ElasticBuilderAdapter<Entity extends AggregateRoot> {
  private readonly builder = bodybuilder()

  private readonly transformers: Map<
    Operator,
    Transformer<Filter<any>, QueryObject>
  > = new Map<Operator, Transformer<Filter<any>, QueryObject>>([
    [Operator.EQUAL, this.termsQuery],
    [Operator.NOT_EQUAL, this.termsQuery],
    [Operator.NULL, this.termsQuery],
    [Operator.NOT_NULL, this.termsQuery],
    [Operator.MATCH, this.wildcardQuery],
    [Operator.GT, this.greaterThanQuery],
    [Operator.LT, this.lowerThanQuery],
    [Operator.GTE, this.greaterThanOrEqualQuery],
    [Operator.LTE, this.lowerThanOrEqualQuery],
    [Operator.IN, this.termsQuery],
    [Operator.NOT_IN, this.termsQuery],
    [Operator.EQUAL_IN_OBJECT_ARRAY, this.termsQuery],
  ])

  public constructor(private readonly query: QueryBuilderObject<Entity>) {}

  public build() {
    this.handleOrders()
    this.handleFilters()
    this.handleMatches()
    this.handleRelations()
    this.handleGeoCoordinates()

    const queryObject = this.builder
      .from(this.query.offset)
      .size(this.query.limit)
      .build()

    if (config.get('observability.db_debug')) {
      Logger.debug('---------------- ElasticBuilderAdapter ----------------')
      Logger.debug(JSON.stringify(queryObject, null, 2))
      Logger.debug('---------------- ElasticBuilderAdapter ----------------')
    }

    return queryObject
  }

  private handleGeoCoordinates() {
    if (this.query.geo) {
      const { unit, distance, property, coordinates } = this.query.geo

      this.builder.filter(TypeQueryEnum.GEO_DISTANCE, {
        [property]: coordinates,
        distance: `${distance}${unit}`,
      })

      this.builder.sort([
        {
          _geo_distance: {
            [property]: coordinates,
            order: 'asc',
            unit,
            ignore_unmapped: true,
          },
        },
      ])
    }
  }

  private handleRelations() {
    if (this.query.hasRelations) {
      Logger.warn('ElasticBuilderAdapter: relations are not supported')
    }
  }

  private handleOrders() {
    if (this.query.hasOrders) {
      const orders = this.query.orders.map(order => ({
        [order.orderBy.value]: order.orderType.value,
      }))

      this.builder.sort(orders)
    }
  }

  private handleMatches() {
    if (this.query.hasMatches) {
      const { type, matches } = this.matchesQuery(this.query)

      this.builder.query(type, matches)
    }
  }

  private handleFilters() {
    if (this.query.hasFilters) {
      for (const filter of this.query.filters) {
        const { type, value, field } = this.queryForFilter(filter)

        filter.operator.isPositive()
          ? this.builder.query(type, field, value)
          : this.builder.notQuery(type, field, value)
      }
    }
  }

  private queryForFilter<V>(filter: Filter<V>): QueryObject {
    const transformer = this.transformers.get(filter.operator.value)

    if (!transformer) throw Error('Transformer not found')

    return transformer(filter)
  }

  private matchesQuery(query: QueryBuilderObject<Entity>) {
    return {
      type: TypeQueryEnum.MATCHES,
      matches: {
        query: query.matches[0].value,
        fields: query.matches.map(match => match.field.value),
      },
    }
  }

  private termsQuery<V>(filter: Filter<V>): QueryObject {
    return {
      type: TypeQueryEnum.TERMS,
      field: filter.field.value,
      value: Array.isArray(filter.value) ? filter.value : [filter.value],
    }
  }

  private greaterThanQuery<V>(filter: Filter<V>): QueryObject {
    return {
      type: TypeQueryEnum.RANGE,
      field: filter.field.value,
      value: { gt: filter.value },
    }
  }

  private lowerThanQuery<V>(filter: Filter<V>): QueryObject {
    return {
      type: TypeQueryEnum.RANGE,
      field: filter.field.value,
      value: { lt: filter.value },
    }
  }

  private greaterThanOrEqualQuery<V>(filter: Filter<V>): QueryObject {
    return {
      type: TypeQueryEnum.RANGE,
      field: filter.field.value,
      value: { gte: filter.value },
    }
  }

  private lowerThanOrEqualQuery<V>(filter: Filter<V>): QueryObject {
    return {
      type: TypeQueryEnum.RANGE,
      field: filter.field.value,
      value: { lte: filter.value },
    }
  }

  private wildcardQuery<V>(filter: Filter<V>): QueryObject {
    return {
      type: TypeQueryEnum.WILDCARD,
      field: filter.field.value,
      value: `*${filter.value}*`,
    }
  }
}
