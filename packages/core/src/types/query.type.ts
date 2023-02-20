/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IQuery } from '../contracts/cqrs/query.interface'
import { IQueryHandler } from '../contracts/cqrs/query-handler.interface'
import { Type } from './command.type'

export type QueryHandlerType<Q extends IQuery = IQuery, R = any> = Type<
  IQueryHandler<Q, R>
>

export interface QueryMetadata {
  id: string
}
