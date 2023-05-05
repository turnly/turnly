/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import { Device } from 'devices/shared/domain/entities/device.entity'
import { DeviceStatus } from 'devices/shared/domain/enums/device-status.enum'
import { DeviceTypes } from 'devices/shared/domain/enums/device-types.enum'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IDeviceDocument
  extends Omit<EntityAttributes<Device>, 'id'>,
    Document {}

export type IDeviceModel = Model<IDeviceDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: DeviceStatus,
      required: true,
    },
    type: {
      type: String,
      enum: DeviceTypes,
      required: true,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
    locationId: {
      type: String,
    },
    pairingCode: {
      type: String,
    },
    pairedBy: {
      type: String,
    },
    pairedAt: {
      type: Date,
    },
    metadata: {
      type: [
        {
          key: String,
          value: String,
        },
      ],
    },
  },
  { timestamps }
)

export const DeviceModel = mongoose.model<IDeviceDocument, IDeviceModel>(
  'Device',
  schema
)
