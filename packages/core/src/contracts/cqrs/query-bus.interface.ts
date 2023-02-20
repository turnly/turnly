/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { IQuery } from './query.interface'

export interface IQueryBus<Q extends IQuery = IQuery> {
  ask<R, T extends Q = Q>(query: T): Promise<R>
}
