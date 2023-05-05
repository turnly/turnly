/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

export interface IOpeningHourDocument
  extends Omit<EntityAttributes<OpeningHour>, 'id'>,
    Document {}

export type IOpeningHourModel = Model<IOpeningHourDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    dayOfWeek: {
      type: Number,
      required: true,
    },
    openAllDay: {
      type: Boolean,
    },
    closedAllDay: {
      type: Boolean,
    },
    openHour: {
      type: Number,
      required: true,
    },
    openMinutes: {
      type: Number,
      required: true,
    },
    closeHour: {
      type: Number,
      required: true,
    },
    closeMinutes: {
      type: Number,
      required: true,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
    locationId: {
      type: String,
      ref: 'Location',
      required: true,
      index: true,
    },
  },
  { timestamps }
)

export const OpeningHourModel = mongoose.model<
  IOpeningHourDocument,
  IOpeningHourModel
>('OpeningHour', schema)
