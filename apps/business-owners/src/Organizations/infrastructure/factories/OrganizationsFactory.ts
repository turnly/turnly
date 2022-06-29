import {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import {
  OrganizationByIdQueryHandler,
  OrganizationBySubdomainQueryHandler,
} from 'Organizations/application/queries'

import { OrganizationsController } from '../api/controllers/OrganizationsController'

export class OrganizationsFactory {
  public static getController(): OrganizationsController {
    return Box.resolve<OrganizationsController>('organizationsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve<OrganizationByIdQueryHandler>('organizationByIdQueryHandler'),
      Box.resolve<OrganizationBySubdomainQueryHandler>(
        'organizationBySubdomainQueryHandler'
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
