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
import { ServiceByIdQueryHandler } from 'Services/application/queries/ServiceByIdQuery'
import { ServicesByLocationQueryHandler } from 'Services/application/queries/ServicesByLocationQuery'
import { Service } from 'Services/domain/entities/Service'

import { ServicesController } from '../api/controllers/ServicesController'
import { ServicesReadableRepo } from '../persistence/mongo/repositories/ServicesReadableRepo'
import { ServicesWritableRepo } from '../persistence/mongo/repositories/ServicesWritableRepo'

export class ServicesFactory {
  public static getController(): ServicesController {
    return Box.resolve<ServicesController>('servicesController')
  }

  public static getWritableRepo(): IWritableRepository<Service> {
    return Box.resolve<ServicesWritableRepo>('servicesWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Service> {
    return Box.resolve<ServicesReadableRepo>('servicesReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [
      Box.resolve<ServiceByIdQueryHandler>('serviceByIdQueryHandler'),
      Box.resolve<ServicesByLocationQueryHandler>(
        'serviceByLocationIdQueryHandler'
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
