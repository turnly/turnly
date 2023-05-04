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
import 'opening-hours/shared/shared.dependency'
import 'opening-hours/save-opening-hours/save-opening-hours.dependency'
import 'opening-hours/list-location-hours/list-location-hours.dependency'

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
import type { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

export class OpeningHoursModule {
  public static getServer(): Producers.BranchManagement.IOpeningHoursServer {
    return {
      save: (...args) => Box.resolve('saveOpeningHoursServer').execute(...args),
      listLocationHours: (...args) =>
        Box.resolve('listLocationHoursServer').execute(...args),
    }
  }

  public static getWritableRepo(): IWritableRepository<OpeningHour> {
    return Box.resolve('openingHoursWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<OpeningHour> {
    return Box.resolve('openingHoursReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('listLocationHoursQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [Box.resolve('saveOpeningHoursCommandHandler')]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
