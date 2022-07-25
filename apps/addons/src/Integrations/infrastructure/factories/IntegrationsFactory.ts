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
import { IntegrationByIdQueryHandler } from 'Integrations/application/queries/IntegrationByIdQuery'
import { Integration } from 'Integrations/domain/entities/Integration'

import { IntegrationsController } from '../api/controllers/IntegrationsController'
import { IntegrationsReadableRepo } from '../persistence/mongo/repositories/IntegrationsReadableRepo'
import { IntegrationsWritableRepo } from '../persistence/mongo/repositories/IntegrationsWritableRepo'

export class IntegrationsFactory {
  public static getController(): IntegrationsController {
    return Box.resolve<IntegrationsController>('integrationsController')
  }

  public static getReadableRepo(): IReadableRepository<Integration> {
    return Box.resolve<IntegrationsReadableRepo>('integrationsReadableRepo')
  }

  public static getWritableRepo(): IWritableRepository<Integration> {
    return Box.resolve<IntegrationsWritableRepo>('integrationsWritableRepo')
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
