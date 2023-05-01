/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OrganizationCommand } from '@turnly/core'
import { DeviceStatus } from 'devices/shared/domain/enums/device-status.enum'
import { DeviceTypes } from 'devices/shared/domain/enums/device-types.enum'

export class CreateDeviceCommand extends OrganizationCommand {
  public readonly name: string
  public readonly status: DeviceStatus
  public readonly type: DeviceTypes
}
