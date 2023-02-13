/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/shared'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Service } from 'Services/Shared/domain/entities/Service'

export interface IServiceDocument
  extends Omit<EntityAttributes<Service>, 'id'>,
    Document {}

export type IServiceModel = Model<IServiceDocument>

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
    locationId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps }
)

export const ServiceModel = mongoose.model<IServiceDocument, IServiceModel>(
  'Service',
  schema
)
