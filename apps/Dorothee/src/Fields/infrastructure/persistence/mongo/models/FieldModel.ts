/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { Field } from 'Fields/domain/entities/Field'
import { FieldTypes } from 'Fields/domain/enums/FieldTypes'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface FieldDocument
  extends Omit<EntityAttributes<Field>, 'id'>,
    Document {}

export type IFieldModel = Model<FieldDocument>

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
    type: {
      type: String,
      enum: FieldTypes,
      required: true,
    },
    entityType: {
      type: String,
      required: true,
    },
    companyId: {
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
  { timestamps: true }
)

export const FieldModel = mongoose.model<FieldDocument, IFieldModel>(
  'Field',
  schema
)
