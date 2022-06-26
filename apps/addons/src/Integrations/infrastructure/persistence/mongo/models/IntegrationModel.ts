/* eslint-disable @typescript-eslint/naming-convention */
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
    companyId: {
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
