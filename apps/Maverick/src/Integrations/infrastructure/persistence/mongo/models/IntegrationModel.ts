/* eslint-disable @typescript-eslint/naming-convention */
import { Attributes as Attrs } from 'Integrations/domain/entities/Integration'
import { IntegrationStatus } from 'Integrations/domain/enums/IntegrationStatus'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IntegrationDocument extends Omit<Attrs, 'id'>, Document {}
export type IIntegrationModel = Model<IntegrationDocument>

const schema = new Schema({
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
})

export const IntegrationModel = mongoose.model<
  IntegrationDocument,
  IIntegrationModel
>('Integration', schema)
