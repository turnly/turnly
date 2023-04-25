/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import { Customer } from 'customers/shared/domain/entities/customer.entity'
import mongoose, { Document, Model, Schema } from 'mongoose'

export interface CustomerDocument
  extends Omit<EntityAttributes<Customer>, 'id'>,
    Document {}

export type ICustomerModel = Model<CustomerDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
    },
    hasWhatsapp: {
      type: Boolean,
    },
    showNameSignage: {
      type: Boolean,
    },
    organizationId: {
      type: String,
      required: true,
      index: true,
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

export const CustomerModel = mongoose.model<CustomerDocument, ICustomerModel>(
  'Customer',
  schema
)
