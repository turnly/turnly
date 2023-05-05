/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import { Feature } from 'features/shared/domain/entities/feature.entity'
import { FeatureUnits } from 'features/shared/domain/enums/feature-units.enum'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IFeatureDocument
  extends Omit<EntityAttributes<Feature>, 'id'>,
    Document {}

export type IFeatureModel = Model<IFeatureDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      unique: true,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
    },
    unit: {
      type: String,
      enum: FeatureUnits,
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

export const FeatureModel = mongoose.model<IFeatureDocument, IFeatureModel>(
  'Feature',
  schema
)
