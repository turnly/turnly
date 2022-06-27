/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes, timestamps } from '@turnly/shared'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Service } from 'Services/domain/entities/Service'

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
