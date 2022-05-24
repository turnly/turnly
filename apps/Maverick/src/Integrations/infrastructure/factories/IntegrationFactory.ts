import { ICommandHandler, IEventSubscriber, IQueryHandler } from '@turnly/core'
import { Box } from '@turnly/core'
import { IntegrationByIdQueryHandler } from 'Integrations/application/queries/IntegrationByIdQuery'
import { IIntegrationReadableRepository } from 'Integrations/domain/contracts/IIntegrationRepository'

import { IntegrationsController } from '../api/controllers/IntegrationsController'

export class IntegrationFactory {
  public static getReadableRepository(): IIntegrationReadableRepository {
    return Box.resolve<IIntegrationReadableRepository>(
      'integrationsReadableRepository'
    )
  }

  public static getController(): IntegrationsController {
    return Box.resolve<IntegrationsController>('integrationsController')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [new IntegrationByIdQueryHandler(this.getReadableRepository())]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
