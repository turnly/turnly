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
import { ServiceByIdQueryHandler } from 'Services/application/queries/ServiceByIdQuery'
import { ServicesByLocationQueryHandler } from 'Services/application/queries/ServicesByLocationQuery'

import { ServicesController } from '../api/controllers/ServicesController'

export class ServicesFactory {
  public static getController(): ServicesController {
    return Box.resolve<ServicesController>('servicesController')
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
