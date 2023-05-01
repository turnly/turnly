/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { IDevicesMapper } from 'devices/shared/domain/contratcs/devices-mapper.interface'
import { IDevicesReadableRepo } from 'devices/shared/domain/contratcs/devices-repo.interface'
import { Device } from 'devices/shared/domain/entities/device.entity'

import { DeviceModel, IDeviceDocument } from './device.model'

export class DevicesReadableRepo
  extends MongoReadableRepo<Device, IDeviceDocument>
  implements IDevicesReadableRepo
{
  public constructor(devicesMapper: IDevicesMapper<IDeviceDocument>) {
    super(DeviceModel, devicesMapper)
  }
}
