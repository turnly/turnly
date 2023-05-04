/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Dependencies
 *
 * @description Register dependencies to the dependency injection container.
 */
import 'organizations/shared/shared.dependency'
import 'organizations/list-my-organizations/list-my-organizations.dependency'
import 'organizations/get-organization-by-subdomain/get-organization-by-subdomain.dependency'

import type {
  ICommandHandler,
  IEventSubscriber,
  IQueryHandler,
  IReadableRepository,
  IWritableRepository,
} from '@turnly/core'
import { Box } from '@turnly/core'
/**
 * Module
 *
 * @description Module definition.
 */
import type { Producers } from '@turnly/grpc'
import type { Organization } from 'organizations/shared/domain/entities/organization.entity'

export class OrganizationsModule {
  public static getServer(): Producers.Tenancy.IOrganizationsServer {
    return {
      listMyOrganizations: (...args) =>
        Box.resolve('listMyOrganizationsServer').execute(...args),
      getBySubdomain: (...args) =>
        Box.resolve('getOrganizationBySubdomainServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Organization> {
    return Box.resolve('organizationsWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Organization> {
    return Box.resolve('organizationsReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve('listMyOrganizationsQueryHandler'),
      Box.resolve('getOrganizationBySubdomainQueryHandler'),
    ]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return []
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
