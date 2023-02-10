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
import 'Locations/SearchAvailableLocationsForServing/dependency/attach-to-dependency-box'
import 'Locations/Shared/infrastructure/persistence/dependency/attach-to-dependency-box'

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
import type {
  SearchAvailableLocationsForServingQueryHandler,
  SearchAvailableLocationsForServingServer,
} from 'Locations/SearchAvailableLocationsForServing'
import type { Location } from 'Locations/Shared/domain/entities/Location'

import type { LocationsReadableRepo } from './Shared/infrastructure/persistence/mongo/repositories/LocationsReadableRepo'
import type { LocationsWritableRepo } from './Shared/infrastructure/persistence/mongo/repositories/LocationsWritableRepo'

export class LocationsModule {
  public static getServer(): Producers.BranchManagement.ILocationsServer {
    return {
      getOne: () => {
        throw new Error('Not implemented')
      },
      find: (...args) =>
        Box.resolve<SearchAvailableLocationsForServingServer>(
          'searchAvailableLocationsForServingServer'
        ).execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Location> {
    return Box.resolve<LocationsWritableRepo>('locationsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Location> {
    return Box.resolve<LocationsReadableRepo>('locationsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve<SearchAvailableLocationsForServingQueryHandler>(
        'searchAvailableLocationsForServingQueryHandler'
      ),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
