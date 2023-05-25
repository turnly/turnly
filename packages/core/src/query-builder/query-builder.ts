/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier } from '@turnly/common'

import { config } from '../config'
import { Attrs } from '../contracts/repositories'
import { AggregateRoot } from '../entities/aggregate-root'
import { EntityAttributes } from '../types/entity-attributes.type'
import { Filter } from './filter.value-object'
import { Operator } from './filter-operator.value-object'
import { Order } from './order.value-object'

export type Property<Entity extends AggregateRoot<Attrs<Entity>>> = Partial<
  keyof EntityAttributes<Entity>
>

export type Value<
  Entity extends AggregateRoot<Attrs<Entity>>,
  P extends Property<Entity>
> = EntityAttributes<Entity>[P]

/**
 * Query Builder
 *
 * @description A universal query builder for building complex queries that can be adapted to different data sources.
 *
 * Just as SQL is the universal language for many databases, we use our own builder to be able
 * to perform the same queries in NoSQL, Elastic, SQL, or any other database.
 *
 * @author Turnly
 */
export class QueryBuilder<Entity extends AggregateRoot<Attrs<Entity>>> {
  /**
   * Limit the number of results
   *
   * @description The maximum number of results to return.
   */
  private limit: number

  /**
   * Offset
   *
   * @description The number of results to skip.
   */
  private offset: number

  /**
   * Filters
   *
   * @description The filters to apply to the query.
   */
  private filters: Filter<any>[] = []

  /**
   * Orders
   *
   * @description The orders to apply to the query.
   */
  private orders: Order[] = []

  /**
   * Geo distance
   *
   * @description The order to apply to the query based on the distance from the assigned coordinates.
   */
  private geo: {
    property: Property<Entity>
    distance: number
    unit: 'meters' | 'kilometers' | 'miles' | 'feet'
    coordinates: {
      lat: number
      lng: number
    }
  }

  /**
   * Relationships
   *
   * @description The relationships to include in the query.
   */
  private relationships: Property<Entity>[] = []

  /**
   * Not Limits
   *
   * @description If the query should not have limits
   */
  private hasLimits = true

  /**
   * Not Limits
   *
   * @description If the query should not have limits
   */
  public notLimits(): QueryBuilder<Entity> {
    this.hasLimits = false

    return this
  }

  /**
   * Equal
   *
   * @description Compares if a property is equal to the assigned value.
   */
  public equal<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.EQUAL, value)
  }

  /**
   * Equal in array
   *
   * @description Compares if a property is equal to one of the assigned values.
   */
  public nested<V>(property: string, value: V): QueryBuilder<Entity> {
    if (!property.includes('.')) {
      throw new Error(
        `Invalid property: ${property}, must be in the form of 'property.nested'`
      )
    }

    return this.addFilter(property as Property<Entity>, Operator.EQUAL, value)
  }

  /**
   * Not Equal
   *
   * @description Compares if a property is not equal to the assigned value.
   */
  public notEqual<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.NOT_EQUAL, value)
  }

  /**
   * Equal in object array
   *
   * @description Compares if a array contains a key/value pair.
   */
  public inObjectArray<P extends Property<Entity>, V extends object>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.EQUAL_IN_OBJECT_ARRAY, value)
  }

  /**
   * Equal in extra array
   *
   * @description Compares if a extra array contains a key/value pair.
   */
  public inExtra(key: string, value: string): QueryBuilder<Entity> {
    return this.addFilter(
      'extra' as Property<Entity>,
      Operator.EQUAL_IN_OBJECT_ARRAY,
      {
        key,
        value,
      }
    )
  }

  /**
   * Match
   *
   * @description Matches a string against a property.
   */
  public match<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.MATCH, value)
  }

  /**
   * Multiple matches
   *
   * @description Matches multiple strings against a property.
   */
  public matches<P extends Property<Entity>, V extends Value<Entity, P>>(
    properties: P[],
    value: V
  ): QueryBuilder<Entity> {
    const queryId = Identifier.generate('matches')

    for (const property of properties) {
      this.addFilter(property, Operator.MATCHES, value, queryId)
    }

    return this
  }

  /**
   * Nullable
   *
   * @description Checks if a property is null.
   */
  public isNull<P extends Property<Entity>>(property: P): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.NULL, 'NULL')
  }

  /**
   * Not nullable
   *
   * @description Checks if a property is not null.
   */
  public isNotNull<P extends Property<Entity>>(
    property: P
  ): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.NOT_NULL, 'NULL')
  }

  /**
   * Greater than
   *
   * @description Compares if a property is greater than the assigned value.
   */
  public greaterThan<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.GT, value)
  }

  /**
   * Greater than alias
   *
   * @description Compares if a property is greater than the assigned value.
   */
  public gt<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.greaterThan(property, value)
  }

  /**
   * Lower than
   *
   * @description Compares if a property is lower than the assigned value.
   */
  public lowerThan<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.LT, value)
  }

  /**
   * Lower than alias
   *
   * @description Compares if a property is lower than the assigned value.
   */
  public lt<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.lowerThan(property, value)
  }

  /**
   * Greater than or equal to
   *
   * @description Compares if a property is greater than or equal to the assigned value.
   */
  public greaterThanOrEqual<
    P extends Property<Entity>,
    V extends Value<Entity, P>
  >(property: P, value: V): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.GTE, value)
  }

  /**
   * Greater than or equal to alias
   *
   * @description Compares if a property is greater than or equal to the assigned value.
   */
  public gte<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.greaterThanOrEqual(property, value)
  }

  /**
   * Lower than or equal to
   *
   * @description Compares if a property is lower than or equal to the assigned value.
   */
  public lowerThanOrEqual<
    P extends Property<Entity>,
    V extends Value<Entity, P>
  >(property: P, value: V): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.LTE, value)
  }

  /**
   * Lower than or equal to alias
   *
   * @description Compares if a property is lower than or equal to the assigned value.
   */
  public lte<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    value: V
  ): QueryBuilder<Entity> {
    return this.lowerThanOrEqual(property, value)
  }

  /**
   * IN Clause
   *
   * @description Creates a IN clause for a property.
   */
  public in<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    values: V[]
  ): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.IN, values)
  }

  /**
   * NOT IN Clause
   *
   * @description Creates a NOT IN clause for a property.
   */
  public notIn<P extends Property<Entity>, V extends Value<Entity, P>>(
    property: P,
    values: V[]
  ): QueryBuilder<Entity> {
    return this.addFilter(property, Operator.NOT_IN, values)
  }

  /**
   * Order by oldest
   *
   * @description The results will be ordered by the oldest.
   */
  public orderByOldest<P extends Property<Entity>>(
    property: P
  ): QueryBuilder<Entity> {
    this.orders.push(Order.asc(String(property)))

    return this
  }

  /**
   * Order by newest
   *
   * @description The results will be ordered by the newest.
   */
  public orderByNewest<P extends Property<Entity>>(
    property: P
  ): QueryBuilder<Entity> {
    this.orders.push(Order.desc(String(property)))

    return this
  }

  /**
   * Order by alphabetical
   *
   * @description The results will be ordered by alphabetical.
   */
  public orderByAlphabetical<P extends Property<Entity>>(
    properties: P[]
  ): QueryBuilder<Entity> {
    for (const property of properties) {
      this.orderByOldest(property)
    }

    return this
  }

  /**
   * Order by geo distance
   *
   * @description The results will be ordered by geo distance.
   */
  public orderByGeo<P extends Property<Entity>>(
    property: P,
    coordinates: {
      lat: number
      lng: number
    },
    /**
     * Distance
     *
     * @description The distance in meters.
     */
    distance = 20_000
  ): QueryBuilder<Entity> {
    this.geo = {
      property,
      distance,
      unit: 'meters',
      coordinates,
    }

    return this
  }

  /**
   * Relations
   *
   * @description The relationships to include in the query.
   */
  public relations<P extends Property<Entity>>(
    relations: P[]
  ): QueryBuilder<Entity> {
    this.relationships = relations

    return this
  }

  /**
   * Paginate
   *
   * @description Paginates the query.
   */
  public paginate(offset?: number, limit?: number): QueryBuilder<Entity> {
    if (!this.hasLimits) {
      this.offset = 0
      this.limit = 0

      return this
    }

    this.offset = offset || config.get('collections.limit')
    this.limit = limit || config.get('collections.offset')

    return this
  }

  /**
   * Get one query
   *
   * @description Returns a query that will return one result.
   */
  public getOne() {
    return this.paginate(config.get('collections.offset'), 1).toObject()
  }

  /**
   * Get collection query
   *
   * @description Returns a query that will return a collection of results.
   */
  public getMany(offset?: number, limit?: number) {
    return this.paginate(offset, limit).toObject()
  }

  /**
   * Add filter
   *
   * @description Internal method to add a filter to the query.
   */
  private addFilter<P extends Property<Entity>, V>(
    property: P,
    operator: Operator,
    value: V,
    queryId: Guid = Identifier.generate('query')
  ): QueryBuilder<Entity> {
    if (value) {
      this.filters.push(
        Filter.create<V>({
          queryId,
          field: String(property),
          operator,
          value,
        })
      )
    }

    return this
  }

  /**
   * Get filters
   *
   * @description Returns the filters of the query.
   */
  private getFilters() {
    return this.filters.filter(
      filter => filter.operator.value !== Operator.MATCHES
    )
  }

  /**
   * Get matches
   *
   * @description Returns the matches of the query.
   */
  private getMatches() {
    return this.filters.filter(
      filter => filter.operator.value === Operator.MATCHES
    )
  }

  /**
   * Has matches
   *
   * @description Returns if the query has matches.
   */
  private hasMatches() {
    return this.getMatches().length > 0
  }

  /**
   * Has filters
   *
   * @description Returns if the query has filters.
   */
  private hasFilters() {
    return this.getFilters().length > 0
  }

  /**
   * Has relationships
   *
   * @description Returns if the query has relationships.
   */
  private hasRelations() {
    return this.relationships.length > 0
  }

  /**
   * Has orders
   *
   * @description Returns if the query has orders.
   */
  private hasOrders() {
    return this.orders.length > 0
  }

  /**
   * Query object
   *
   * @description Returns the query object.
   */
  private toObject() {
    return {
      relations: this.relationships,
      filters: this.getFilters(),
      matches: this.getMatches(),
      geo: this.geo,
      hasFilters: this.hasFilters(),
      hasMatches: this.hasMatches(),
      hasRelations: this.hasRelations(),
      hasOrders: this.hasOrders(),
      limit: this.limit,
      offset: this.offset,
      orders: this.orders,
    }
  }
}
