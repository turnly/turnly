/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { Agent } from 'Agents/domain/entities/Agent'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface IAgentDocument
  extends Omit<EntityAttributes<Agent>, 'id'>,
    Document {}

export type IAgentModel = Model<IAgentDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    nick: {
      type: String,
    },
    position: {
      type: String,
    },
    companyId: {
      type: String,
      required: true,
      index: true,
    },
    deskId: {
      type: String,
    },
    locationId: {
      type: String,
      required: true,
      index: true,
    },
    servingFromIds: {
      type: [String],
    },
  },
  { timestamps: true }
)

export const AgentModel = mongoose.model<IAgentDocument, IAgentModel>(
  'Agent',
  schema
)
