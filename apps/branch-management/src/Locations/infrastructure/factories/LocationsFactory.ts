/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Box,
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { FindLocationsQueryHandler } from 'Locations/application/queries/FindLocationsQuery'
import { LocationByIdQueryHandler } from 'Locations/application/queries/LocationByIdQuery'
import { Location } from 'Locations/domain/entities/Location'

import { LocationsController } from '../api/controllers/LocationsController'
import { LocationsReadableRepo } from '../persistence/mongo/repositories/LocationsReadableRepo'
import { LocationsWritableRepo } from '../persistence/mongo/repositories/LocationsWritableRepo'

export class LocationsFactory {
  public static getController(): LocationsController {
    return Box.resolve<LocationsController>('locationsController')
  }

  public static getWritableRepo(): IWritableRepository<Location> {
    return Box.resolve<LocationsWritableRepo>('locationsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Location> {
    return Box.resolve<LocationsReadableRepo>('locationsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve<LocationByIdQueryHandler>('locationByIdQueryHandler'),
      Box.resolve<FindLocationsQueryHandler>('findLocationsQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
