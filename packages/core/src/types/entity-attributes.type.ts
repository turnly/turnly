/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Attrs } from '../contracts/repositories'
import type { AggregateRoot } from '../entities/aggregate-root'
import { QueryBuilder } from '../query-builder/query-builder'

export type EntityAttributes<Entity extends AggregateRoot> = ReturnType<
  Entity['toObject']
>

export type QueryBuilderObject<Entity extends AggregateRoot<Attrs<Entity>>> =
  ReturnType<QueryBuilder<Entity>['getMany']>

export interface Transformer<T, K> {
  (value: T): K
}
