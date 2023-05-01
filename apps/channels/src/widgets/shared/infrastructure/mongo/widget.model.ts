/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Widget } from 'widgets/shared/domain/entities/widget.entity'
import { WidgetStatus } from 'widgets/shared/domain/enums/widget-status.enum'

export interface IWidgetDocument
  extends Omit<EntityAttributes<Widget>, 'id'>,
    Document {}

export type IWidgetModel = Model<IWidgetDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: WidgetStatus,
      required: true,
    },
    origins: {
      type: [String],
      required: true,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
    deviceId: {
      type: String,
      required: true,
    },
    openByDefault: {
      type: Boolean,
      default: false,
    },
    showFullscreen: {
      type: Boolean,
      default: false,
    },
    showCloseButton: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
    },
  },
  { timestamps }
)

export const WidgetModel = mongoose.model<IWidgetDocument, IWidgetModel>(
  'Widget',
  schema
)
