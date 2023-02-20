/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IQuery } from './query.interface'

export interface IQueryHandler<Q extends IQuery = any, Res = any> {
  execute(query: Q): Promise<Res>
}
