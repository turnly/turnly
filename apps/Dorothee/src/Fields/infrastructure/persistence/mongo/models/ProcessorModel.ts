/* eslint-disable @typescript-eslint/naming-convention */
import { Attributes as Attrs } from 'Fields/domain/entities/Processor'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface ProcessorDocument extends Omit<Attrs, 'id'>, Document {}
export type IProcessorModel = Model<ProcessorDocument>

const schema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  workspaceId: {
    type: String,
    required: true,
    index: true,
  },
  url: {
    type: String,
    required: true,
  },
  signature: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
  },
  lastFiredAt: {
    type: Date,
  },
})

export const ProcessorModel = mongoose.model<
  ProcessorDocument,
  IProcessorModel
>('Processor', schema)
