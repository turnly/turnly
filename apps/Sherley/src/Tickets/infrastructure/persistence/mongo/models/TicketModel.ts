/* eslint-disable @typescript-eslint/naming-convention */
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Attributes as Attrs } from 'Tickets/domain/entities/Ticket'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

export interface TicketDocument extends Omit<Attrs, 'id'>, Document {}
export type ITicketModel = Model<TicketDocument>

const schema = new Schema({
  _id: String,
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: TicketStatus,
    required: true,
  },
  displayCode: {
    type: String,
    required: true,
  },
  metadata: {
    type: Object,
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
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true,
    index: true,
  },
})

export const TicketModel = mongoose.model<TicketDocument, ITicketModel>(
  'Ticket',
  schema
)
