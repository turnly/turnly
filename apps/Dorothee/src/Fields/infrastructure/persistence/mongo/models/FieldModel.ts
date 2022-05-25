/* eslint-disable @typescript-eslint/naming-convention */
import { Attributes as Attrs } from 'Fields/domain/entities/Field'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface FieldDocument extends Omit<Attrs, 'id'>, Document {}
export type IFieldModel = Model<FieldDocument>

const schema = new Schema({
  _id: String,
  label: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  entityType: {
    type: String,
    required: true,
  },
  serviceId: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
  },
})

export const FieldModel = mongoose.model<FieldDocument, IFieldModel>(
  'Field',
  schema
)
