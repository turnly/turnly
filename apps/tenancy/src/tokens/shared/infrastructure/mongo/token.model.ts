/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Token } from 'tokens/shared/domain/entity/token.entity'

export interface ITokenDocument
  extends Omit<EntityAttributes<Token>, 'id'>,
    Document {}

export type ITokenModel = Model<ITokenDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    scopes: {
      type: [String],
      required: true,
    },
    prefix: {
      type: String,
      required: true,
      unique: true,
    },
    secret: {
      type: String,
      required: true,
      unique: true,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps }
)

export const TokenModel = mongoose.model<ITokenDocument, ITokenModel>(
  'Token',
  schema
)
