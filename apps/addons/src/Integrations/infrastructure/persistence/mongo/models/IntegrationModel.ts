/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/shared'
import { Integration } from 'Integrations/domain/entities/Integration'
import { IntegrationStatus } from 'Integrations/domain/enums/IntegrationStatus'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IIntegrationDocument
  extends Omit<EntityAttributes<Integration>, 'id'>,
    Document {}

export type IIntegrationModel = Model<IIntegrationDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: IntegrationStatus,
      required: true,
    },
    origins: {
      type: [String],
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

export const IntegrationModel = mongoose.model<
  IIntegrationDocument,
  IIntegrationModel
>('Integration', schema)
