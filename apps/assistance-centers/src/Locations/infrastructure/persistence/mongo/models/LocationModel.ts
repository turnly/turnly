/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes, timestamps } from '@turnly/shared'
import { Location } from 'Locations/domain/entities/Location'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface ILocationDocument
  extends Omit<EntityAttributes<Location>, 'id' | 'coordinates'>,
    Document {
  coordinates: {
    type: string
    coordinates: number[]
  }
}

export type ILocationModel = Model<ILocationDocument>

const schema = new Schema<ILocationDocument>(
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
    },
    stopServingBeforeInMinutes: {
      type: Number,
    },
  },
  { timestamps }
)

schema.index({ coordinates: '2dsphere' })

export const LocationModel = mongoose.model<ILocationDocument, ILocationModel>(
  'Location',
  schema
)
