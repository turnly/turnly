/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import { LocationByIdQueryHandler } from 'Locations/application/queries/LocationByIdQuery'

import { LocationsController } from '../api/controllers/LocationsController'

export class LocationsFactory {
  public static getController(): LocationsController {
    return Box.resolve<LocationsController>('locationsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve<LocationByIdQueryHandler>('locationByIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
