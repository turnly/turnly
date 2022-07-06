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
import { IntegrationByIdQueryHandler } from 'Integrations/application/queries/IntegrationByIdQuery'

import { IntegrationsController } from '../api/controllers/IntegrationsController'

export class IntegrationsFactory {
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
