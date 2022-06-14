/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { Agent } from 'Agents/domain/entities/Agent'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface AgentDocument
  extends Omit<EntityAttributes<Agent>, 'id'>,
    Document {}
export type IAgentModel = Model<AgentDocument>

const schema = new Schema({
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
    type: String,
    required: true,
  },
})

export const AgentModel = mongoose.model<AgentDocument, IAgentModel>(
  'Agent',
  schema
)
