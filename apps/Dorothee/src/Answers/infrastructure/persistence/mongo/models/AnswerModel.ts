/* eslint-disable @typescript-eslint/naming-convention */
import { Attributes as Attrs } from 'Answers/domain/entities/Answer'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface AnswerDocument extends Omit<Attrs, 'id'>, Document {}
export type IAnswerModel = Model<AnswerDocument>

const schema = new Schema({
  _id: String,
  value: {
    type: String,
    required: true,
  },
  fieldId: {
    type: Schema.Types.ObjectId,
    ref: 'Field',
    required: true,
  },
  entityId: {
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
  metadata: {
    type: Object,
  },
})

export const AnswerModel = mongoose.model<AnswerDocument, IAnswerModel>(
  'Answer',
  schema
)
