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
import 'features/shared/shared.dependency'
import 'features/bulk-features/bulk-features.dependency'
import 'features/delete-feature/delete-feature.dependency'
import 'features/list-features/list-features.dependency'

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
import type { Feature } from 'features/shared/domain/entities/feature.entity'

export class FeaturesModule {
  public static getServer(): Producers.Tenancy.IFeaturesServer {
    return {
      bulk: (...args) => Box.resolve('bulkFeaturesServer').execute(...args),
      delete: (...args) => Box.resolve('deleteFeatureServer').execute(...args),
      list: (...args) => Box.resolve('listFeaturesServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<Feature> {
    return Box.resolve('featuresWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Feature> {
    return Box.resolve('featuresReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('listFeaturesQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve('bulkFeaturesCommandHandler'),
      Box.resolve('deleteFeatureCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
