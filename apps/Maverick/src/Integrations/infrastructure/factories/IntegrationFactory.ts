import {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
} from '@turnly/shared'
import { Box } from '@turnly/shared'
import { IntegrationByIdQueryHandler } from 'Integrations/application/queries/IntegrationByIdQuery'

import { IntegrationsController } from '../api/controllers/IntegrationsController'

export class IntegrationFactory {
  public static getController(): IntegrationsController {
    return Box.resolve<IntegrationsController>('integrationsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve<IntegrationByIdQueryHandler>('integrationByIdQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
