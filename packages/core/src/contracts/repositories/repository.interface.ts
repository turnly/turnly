/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { AggregateRoot } from '../../entities/aggregate-root'
import { IDestroyableRepository as IDestroyable } from './destroyable-repo.interface'
import { Attrs } from './readable-repo.interface'
import { IReadableWritableRepository as IReadableWritable } from './readable-writable-repo.interface'

export interface IRepository<
  Entity extends AggregateRoot<Attrs<Entity>>,
  Transaction = unknown
> extends IReadableWritable<Entity, Transaction>,
    IDestroyable<Transaction> {}
