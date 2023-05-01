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
import 'devices/shared/shared.dependency'
import 'devices/create-device/create-device.dependency'
import 'devices/get-one-device-by-criteria-by-criteria/get-one-device-by-criteria.dependency'
import 'devices/pair-to-location/pair-to-location.dependency'

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
import type { Device } from 'devices/shared/domain/entities/device.entity'

export class DevicesModule {
  public static getWritableRepo(): IWritableRepository<Device> {
    return Box.resolve('devicesWritableRepo')
  }

  public static getReadableRepo(): IReadableRepository<Device> {
    return Box.resolve('devicesReadableRepo')
  }

  public static getQueryHandlers(): IQueryHandler[] {
    return [Box.resolve('getOneDeviceByCriteriaQueryHandler')]
  }

  public static getCommandHandlers(): ICommandHandler[] {
    return [
      Box.resolve('createDeviceCommandHandler'),
      Box.resolve('pairToLocationCommandHandler'),
    ]
  }

  public static getEventSubscribers(): IEventSubscriber[] {
    return []
  }
}
