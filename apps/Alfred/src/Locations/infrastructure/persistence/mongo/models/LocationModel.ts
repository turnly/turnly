/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { Location } from 'Locations/domain/entities/Location'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface LocationDocument
  extends Omit<EntityAttributes<Location>, 'id' | 'coordinates'>,
    Document {
  coordinates: {
    type: string
    coordinates: number[]
  }
}

export type ILocationModel = Model<LocationDocument>

const schema = new Schema(
  {
    _id: String,
    companyId: {
      type: String,
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    coordinates: {
      type: {
        type: String,
        default: 'Point',
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
      index: '2dsphere',
    },
    stopServingBeforeInMinutes: {
      type: Number,
    },
  },
  { timestamps: true }
)

export const LocationModel = mongoose.model<LocationDocument, ILocationModel>(
  'Location',
  schema
)
