/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Identifier } from '@turnly/common'

import { IQuery } from '../contracts/cqrs/query.interface'
import { QUERY_HANDLER_METADATA, QUERY_METADATA } from './constants'

export const QueryHandler = (query: IQuery): ClassDecorator => {
  return <T extends Object>(target: T) => {
    if (!Reflect.hasMetadata(QUERY_METADATA, query)) {
      Reflect.defineMetadata(
        QUERY_METADATA,
        { id: Identifier.generate('query') },
        query
      )
    }

    Reflect.defineMetadata(QUERY_HANDLER_METADATA, query, target)
  }
}
