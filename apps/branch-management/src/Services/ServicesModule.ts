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
import 'Services/Shared/infrastructure/persistence/dependency/attach-to-dependency-box'
import 'Services/GetOneService/dependency/attach-to-dependency-box'
import 'Services/GetServicesOfOneLocation/dependency/attach-to-dependency-box'

/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/rpc'
import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import type { Service } from 'Services/Shared/domain/entities/Service'

export class ServicesModule {
  public static getServer(): Producers.BranchManagement.IServicesServer {
    return {
      getOne: (...args) => Box.resolve('getOneServiceServer').execute(...args),
      getServicesOfOneLocation: (...args) =>
        Box.resolve('getServicesOfOneLocationServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Service> {
    return Box.resolve('servicesWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Service> {
    return Box.resolve('servicesReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve('getServicesOfOneLocationQueryHandler'),
      Box.resolve('getOneServiceQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
