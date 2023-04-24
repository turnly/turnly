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
import 'integrations/shared/dependency/attach-to-dependency-box'
import 'integrations/get-one-integration/dependency/attach-to-dependency-box'

/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/grpc'
import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import type { Integration } from 'integrations/shared/domain/entities/integration.entity'

export class IntegrationsModule {
  public static getServer(): Producers.Addons.IIntegrationsServer {
    return {
      getOne: (...args) =>
        Box.resolve('getOneIntegrationServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Integration> {
    return Box.resolve('integrationsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Integration> {
    return Box.resolve('integrationsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('getOneIntegrationQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
