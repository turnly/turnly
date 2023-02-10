/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/rpc'
import {
  Box,
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { SearchAvailableLocationsForServingQueryHandler } from 'Locations/SearchAvailableLocationsForServing'
import { Location } from 'Locations/Shared/domain/entities/Location'

import { LocationsReadableRepo } from './Shared/infrastructure/persistence/mongo/repositories/LocationsReadableRepo'
import { LocationsWritableRepo } from './Shared/infrastructure/persistence/mongo/repositories/LocationsWritableRepo'

export class LocationsModule {
  public static getServer(): Producers.BranchManagement.ILocationsServer {
    return {
      getOne: () => {
        throw new Error('Not implemented')
      },
      find: () => {
        throw new Error('Not implemented')
      },
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
