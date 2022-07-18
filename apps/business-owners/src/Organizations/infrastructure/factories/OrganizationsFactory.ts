/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import {
  Box,
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/shared'
import { OrganizationByIdQueryHandler } from 'Organizations/application/queries/OrganizationByIdQuery'
import { OrganizationBySubdomainQueryHandler } from 'Organizations/application/queries/OrganizationBySubdomainQuery'
import { Organization } from 'Organizations/domain/entities/Organization'

import { OrganizationsController } from '../api/controllers/OrganizationsController'
import { OrganizationsReadableRepo } from '../persistence/mongo/repositories/OrganizationsReadableRepo'
import { OrganizationsWritableRepo } from '../persistence/mongo/repositories/OrganizationsWritableRepo'

export class OrganizationsFactory {
  public static getController(): OrganizationsController {
    return Box.resolve<OrganizationsController>('organizationsController')
  }

  public static getWritableRepo(): IWritableRepository<Organization> {
    return Box.resolve<OrganizationsWritableRepo>('organizationsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Organization> {
    return Box.resolve<OrganizationsReadableRepo>('organizationsReadableRepo')
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
