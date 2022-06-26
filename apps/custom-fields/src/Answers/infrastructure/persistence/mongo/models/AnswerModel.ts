/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes, timestamps } from '@turnly/shared'
import { Answer } from 'Answers/domain/entities/Answer'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface AnswerDocument
  extends Omit<EntityAttributes<Answer>, 'id'>,
    Document {}

export type IAnswerModel = Model<AnswerDocument>

const schema = new Schema(
  {
    _id: String,
    value: {
      type: String,
      required: true,
    },
    fieldId: {
      type: String,
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
    companyId: {
      type: String,
      required: true,
      index: true,
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

export const AnswerModel = mongoose.model<AnswerDocument, IAnswerModel>(
  'Answer',
  schema
)
