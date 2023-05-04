/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'
import {
  ClearTicketsAfter,
  Order,
  RefreshTimeUnit,
} from 'signage-displays/shared/domain/enums'

export interface ISignageDisplayDocument
  extends Omit<EntityAttributes<SignageDisplay>, 'id'>,
    Document {}

export type ISignageDisplayModel = Model<ISignageDisplayDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    deviceId: {
      type: String,
      required: true,
    },
    refreshTime: {
      type: Number,
    },
    refreshTimeUnit: {
      type: String,
      enum: RefreshTimeUnit,
    },
    locationId: {
      type: String,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
    clearTicketsAfter: {
      type: String,
      enum: ClearTicketsAfter,
    },
    serviceIds: {
      type: [String],
    },
    order: {
      type: String,
      enum: Order,
    },
  },
  { timestamps }
)

export const SignageDisplayModel = mongoose.model<
  ISignageDisplayDocument,
  ISignageDisplayModel
>('SignageDisplay', schema)
