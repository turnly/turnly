/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MemberRoles } from '@turnly/auth'
import { EntityAttributes, timestamps } from '@turnly/core'
import { Member } from 'members/shared/domain/entity/member.entity'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IMemberDocument
  extends Omit<EntityAttributes<Member>, 'id'>,
    Document {}

export type IMemberModel = Model<IMemberDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: MemberRoles,
      required: true,
      index: true,
    },
    userId: {
      type: String,
      required: true,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
    },
    locationId: {
      type: String,
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

export const MemberModel = mongoose.model<IMemberDocument, IMemberModel>(
  'Member',
  schema
)
