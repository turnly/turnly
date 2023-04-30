/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IAccessTokenDocument
  extends Omit<EntityAttributes<AccessToken>, 'id'>,
    Document {}

export type IAccessTokenModel = Model<IAccessTokenDocument>

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
    token: {
      type: String,
      required: true,
      unique: true,
    },
    createdByType: {
      type: String,
      required: true,
    },
    createdById: {
      type: String,
      required: true,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps }
)

export const AccessTokenModel = mongoose.model<
  IAccessTokenDocument,
  IAccessTokenModel
>('AccessToken', schema)
