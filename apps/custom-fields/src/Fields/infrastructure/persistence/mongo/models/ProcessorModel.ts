/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/shared'
import { Processor } from 'Fields/domain/entities/Processor'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IProcessorDocument
  extends Omit<EntityAttributes<Processor>, 'id'>,
    Document {}

export type IProcessorModel = Model<IProcessorDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
    url: {
      type: String,
      required: true,
    },
    signature: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
    },
    lastFiredAt: {
      type: Date,
    },
  },
  { timestamps }
)

export const ProcessorModel = mongoose.model<
  IProcessorDocument,
  IProcessorModel
>('Processor', schema)
