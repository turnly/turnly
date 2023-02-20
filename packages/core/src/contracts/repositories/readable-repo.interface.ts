/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'

import { AggregateRoot } from '../../entities/aggregate-root'
import {
  EntityAttributes,
  QueryBuilderObject,
} from '../../types/entity-attributes.type'

export type Attrs<Entity extends AggregateRoot<EntityAttributes<Entity>>> =
  EntityAttributes<Entity>

export interface IReadableRepository<
  Entity extends AggregateRoot<Attrs<Entity>>
> {
  getOne(query: QueryBuilderObject<Entity>): Promise<Nullable<Entity>>
  find(query: QueryBuilderObject<Entity>): Promise<Entity[]>
  count(query: QueryBuilderObject<Entity>): Promise<number>
}
