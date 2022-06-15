/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { TicketPriority } from 'Tickets/domain/enums/TicketPriority'
import { TicketScore } from 'Tickets/domain/enums/TicketScore'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

export interface TicketDocument
  extends Omit<EntityAttributes<Ticket>, 'id'>,
    Document {}

export type ITicketModel = Model<TicketDocument>

const schema = new Schema(
  {
    _id: String,
    status: {
      type: String,
      enum: TicketStatus,
      required: true,
    },
    priority: {
      type: String,
      enum: TicketPriority,
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
    companyId: {
      type: String,
      required: true,
      index: true,
    },
    assigneeId: {
      type: String,
      index: true,
    },
    createdAt: {
      type: Date,
      required: true,
    },
    rating: {
      score: {
        type: String,
        enum: TicketScore,
        required: true,
        index: true,
      },
      comment: String,
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
  { timestamps: true }
)

export const TicketModel = mongoose.model<TicketDocument, ITicketModel>(
  'Ticket',
  schema
)
