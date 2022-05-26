/* eslint-disable @typescript-eslint/naming-convention */
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Attributes as Attrs } from 'Tickets/domain/entities/Ticket'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

export interface TicketDocument extends Omit<Attrs, 'id'>, Document {}
export type ITicketModel = Model<TicketDocument>

const schema = new Schema({
  _id: String,
  status: {
    type: String,
    enum: TicketStatus,
    required: true,
  },
  displayCode: {
    type: String,
    required: true,
  },
  serviceId: {
    type: String,
    required: true,
    index: true,
  },
  locationId: {
    type: String,
    required: true,
    index: true,
  },
  customerId: {
    type: String,
    required: true,
    index: true,
  },
  workspaceId: {
    type: String,
    required: true,
    index: true,
  },
})

export const TicketModel = mongoose.model<TicketDocument, ITicketModel>(
  'Ticket',
  schema
)
