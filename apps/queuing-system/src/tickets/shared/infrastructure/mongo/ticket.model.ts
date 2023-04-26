/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Ticket } from 'tickets/shared/domain/entities/ticket.entity'
import { TicketPriority } from 'tickets/shared/domain/enums/TicketPriority'
import { TicketScore } from 'tickets/shared/domain/enums/TicketScore'
import { TicketSource } from 'tickets/shared/domain/enums/TicketSource'
import { TicketStatus } from 'tickets/shared/domain/enums/TicketStatus'

export interface ITicketDocument
  extends Omit<EntityAttributes<Ticket>, 'id'>,
    Document {}

export type ITicketModel = Model<ITicketDocument>

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
    source: {
      type: String,
      enum: TicketSource,
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
    organizationId: {
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
      immutable: true,
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
  { timestamps }
)

export const TicketModel = mongoose.model<ITicketDocument, ITicketModel>(
  'Ticket',
  schema
)
