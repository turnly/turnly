/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { AggregateRoot } from '../../entities/aggregate-root'
import {
  Attrs,
  IReadableRepository as IReadable,
} from './readable-repo.interface'
import { IWritableRepository as IWritable } from './writable-repo.interface'

interface IReadableWritableRepository<
  Entity extends AggregateRoot<Attrs<Entity>>
> extends IReadable<Entity>,
    IWritable<Entity> {}

export { IReadableWritableRepository }
