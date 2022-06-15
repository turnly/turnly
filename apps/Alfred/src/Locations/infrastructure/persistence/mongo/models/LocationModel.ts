/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { Location } from 'Locations/domain/entities/Location'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface LocationDocument
  extends Omit<EntityAttributes<Location>, 'id'>,
    Document {}
export type ILocationModel = Model<LocationDocument>

const schema = new Schema({
  _id: String,
  companyId: {
    type: String,
    required: true,
    index: true,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  stopServingBefore: {
    type: Number,
  },
})

export const LocationModel = mongoose.model<LocationDocument, ILocationModel>(
  'Location',
  schema
)
