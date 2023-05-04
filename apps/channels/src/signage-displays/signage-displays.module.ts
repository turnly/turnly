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
import 'signage-displays/shared/shared.dependency'
import 'signage-displays/get-pairing-code/get-pairing-code.dependency'

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
import { NotImplementedError } from '@turnly/observability'
import type { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

export class SignageDisplaysModule {
  public static getServer(): Producers.Channels.ISignageDisplaysServer {
    return {
      getPairingCode: (...args) =>
        Box.resolve('getPairingCodeServer').execute(...args),
      unpair: () => new NotImplementedError(),
      pairToLocation: () => new NotImplementedError(),
    }
  }

  public static getWritableRepo(): IWritableRepository<SignageDisplay> {
    return Box.resolve('signageDisplaysWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<SignageDisplay> {
    return Box.resolve('signageDisplaysReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return []
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [Box.resolve('getPairingCodeCommandHandler')]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
