/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { IDevicesMapper } from 'devices/shared/domain/contratcs/devices-mapper.interface'
import { Device } from 'devices/shared/domain/entities/device.entity'

import { DeviceModel, IDeviceDocument } from './device.model'

export class DevicesMapper implements IDevicesMapper<IDeviceDocument> {
  public toEntity(document: IDeviceDocument): Device {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Device>>()

    return Device.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Device): IDeviceDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new DeviceModel({ ...attrs, _id })
  }

  public toEntityList(documents: IDeviceDocument[]): Device[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Device[]): IDeviceDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
