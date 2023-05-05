/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Dependencies
 *
 * @description Register dependencies to the dependency injection container.
 */
import 'tokens/shared/shared.dependency'
import 'tokens/get-one-token/get-one-token.dependency'
import 'tokens/create-token/create-token.dependency'

import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/core'
import { Box } from '@turnly/core'
/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/grpc'
import type { Token } from 'tokens/shared/domain/entity/token.entity'

export class TokensModule {
  public static getServer(): Producers.Tenancy.ITokensServer {
    return {
      getOne: (...args) => Box.resolve('getOneTokenServer').execute(...args),
      create: (...args) => Box.resolve('createTokenServer').execute(...args),
      exchange: () => {
        throw new Error('Not implemented')
      },
    }
  }

  public static getWritableRepo(): IWritableRepository<Token> {
    return Box.resolve('tokensWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Token> {
    return Box.resolve('tokensReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('getOneTokenQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [Box.resolve('createTokenCommandHandler')]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
