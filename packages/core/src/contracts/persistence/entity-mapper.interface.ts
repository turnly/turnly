/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { AggregateRoot } from '../../entities/aggregate-root'
import { Attrs } from '../repositories'

export interface IEntityMapper<
  Entity extends AggregateRoot<Attrs<Entity>>,
  Model = Record<string, any>
> {
  toEntity(model: Model): Entity
  toModel(entity: Entity): Model
  toEntityList(models?: Model[]): Entity[]
  toModelList(entities?: Entity[]): Model[]
}
