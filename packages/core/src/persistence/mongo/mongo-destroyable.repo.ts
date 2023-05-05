/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/* eslint-disable @typescript-eslint/naming-convention */
import { Guid } from '@turnly/common'
import { Document, Model } from 'mongoose'

import { IEntityMapper } from '../../contracts/persistence/entity-mapper.interface'
import { IDestroyableRepository } from '../../contracts/repositories'
import { AggregateRoot } from '../../entities/aggregate-root'

export abstract class MongoDestroyableRepo<
  Entity extends AggregateRoot,
  D extends Document
> implements IDestroyableRepository
{
  protected constructor(
    protected readonly model: Model<D>,
    private readonly mapper: IEntityMapper<Entity, D>
  ) {}

  public async destroy(id: Guid): Promise<void> {
    await this.model.deleteOne({ _id: id })
  }
}
