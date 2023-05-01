/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/core'
import { IDevicesMapper } from 'devices/shared/domain/contratcs/devices-mapper.interface'
import { IDevicesWritableRepo } from 'devices/shared/domain/contratcs/devices-repo.interface'
import { Device } from 'devices/shared/domain/entities/device.entity'

import { DeviceModel, IDeviceDocument } from './device.model'

export class DevicesWritableRepo
  extends MongoWritableRepo<Device, IDeviceDocument>
  implements IDevicesWritableRepo
{
  public constructor(devicesMapper: IDevicesMapper<IDeviceDocument>) {
    super(DeviceModel, devicesMapper)
  }
}
