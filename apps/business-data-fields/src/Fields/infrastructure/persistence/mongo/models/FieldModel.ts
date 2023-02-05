/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'
import { FieldTypes } from 'Fields/domain/enums/FieldTypes'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IFieldDocument
  extends Omit<EntityAttributes<Field>, 'id'>,
    Document {}

export type IFieldModel = Model<IFieldDocument>

const schema = new Schema(
  {
    _id: String,
    label: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    type: {
      type: String,
      enum: FieldTypes,
      required: true,
    },
    entityType: {
      type: String,
      required: true,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
    isRequired: {
      type: Boolean,
    },
    extra: {
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

export const FieldModel = mongoose.model<IFieldDocument, IFieldModel>(
  'Field',
  schema
)
