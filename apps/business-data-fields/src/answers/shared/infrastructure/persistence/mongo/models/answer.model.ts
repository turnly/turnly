/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/shared'
import { Answer } from 'answers/shared/domain/entities/answer.entity'
import { EntityTypes } from 'answers/shared/domain/enums/entity-type.enum'
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
      enum: EntityTypes,
      required: true,
    },
    organizationId: {
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
