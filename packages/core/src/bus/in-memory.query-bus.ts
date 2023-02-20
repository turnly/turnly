/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Logger } from '@turnly/observability'
import * as stopWatch from 'marky'

import { IQuery } from '../contracts/cqrs/query.interface'
import { IQueryBus } from '../contracts/cqrs/query-bus.interface'
import { IQueryHandler } from '../contracts/cqrs/query-handler.interface'
import { QUERY_HANDLER_METADATA, QUERY_METADATA } from '../decorators/constants'
import { InvalidQueryHandlerError } from '../errors/invalid-query-handler.error'
import { QueryHandlerNotFoundError } from '../errors/query-handler-not-found.error'
import { Type } from '../types/command.type'
import { QueryHandlerType, QueryMetadata } from '../types/query.type'

export class InMemoryQueryBus<Query extends IQuery = IQuery>
  implements IQueryBus<Query>
{
  private readonly handlers = new Map<string, IQueryHandler<Query>>()

  public async ask<T extends Query, TResult = any>(query: T): Promise<TResult> {
    const handler = this.getHandlerForQuery(query)
    const {
      constructor: { name },
    } = this.getQueryType(query)

    stopWatch.mark(name)

    Logger.verbose(`Executing query ${name} ...`, { ...query.valueOf() })

    const executed = await handler.execute(query)

    Logger.verbose(`Successfully executed the ${name} query`, {
      ...stopWatch.stop(name),
    })

    return executed
  }

  public register(handlers: IQueryHandler<Query>[]) {
    for (const handler of handlers) {
      const { constructor: handlerType } = Object.getPrototypeOf(handler)

      const queryId = this.reflectQueryId(handlerType)
      if (!queryId) throw new InvalidQueryHandlerError()

      this.handlers.set(queryId, handler)
    }

    return this
  }

  private getHandlerForQuery(query: Query) {
    const queryId = this.getQueryId(this.getQueryType(query).constructor)
    const handler = this.handlers.get(queryId)

    if (!handler) {
      throw new QueryHandlerNotFoundError(queryId)
    }

    return handler
  }

  private getQueryId(query: Type<Query>) {
    const meta: QueryMetadata = Reflect.getMetadata(QUERY_METADATA, query)

    if (!meta?.id) throw new QueryHandlerNotFoundError(query.name)

    return meta.id
  }

  private reflectQueryId(handler: QueryHandlerType<Query>) {
    const query: Type<Query> = Reflect.getMetadata(
      QUERY_HANDLER_METADATA,
      handler
    )

    return this.getQueryId(query)
  }

  private getQueryType(query: Query) {
    return Object.getPrototypeOf(query)
  }
}
