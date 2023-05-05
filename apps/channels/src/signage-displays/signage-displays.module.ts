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
import 'signage-displays/generate-pairing-code/generate-pairing-code.dependency'
import 'signage-displays/get-one-signage-display/get-one-signage-display.dependency'
import 'signage-displays/list-signage-displays/list-signage-displays.dependency'
import 'signage-displays/update-signage-display/update-signage-display.dependency'

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
      generatePairingCode: (...args) =>
        Box.resolve('generatePairingCodeServer').execute(...args),
      unpair: () => new NotImplementedError(),
      pairToLocation: () => new NotImplementedError(),
      list: (...args) =>
        Box.resolve('listSignageDisplaysServer').execute(...args),
      update: (...args) =>
        Box.resolve('updateSignageDisplayServer').execute(...args),
      getOne: (...args) =>
        Box.resolve('getOneSignageDisplayServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<SignageDisplay> {
    return Box.resolve('signageDisplaysWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<SignageDisplay> {
    return Box.resolve('signageDisplaysReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve('getOneSignageDisplayQueryHandler'),
      Box.resolve('listSignageDisplaysQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve('generatePairingCodeCommandHandler'),
      Box.resolve('updateSignageDisplayCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
