import { ICommandHandler, IQueryHandler } from '@turnly/shared'
import { Box } from '@turnly/shared'
import { LocationByIdQueryHandler } from 'Locations/application/queries'

import { LocationsController } from '../api/controllers/LocationsController'

export class LocationFactory {
  public static getController(): LocationsController {
    return Box.resolve<LocationsController>('locationsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve<LocationByIdQueryHandler>('locationByIdQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }
}
