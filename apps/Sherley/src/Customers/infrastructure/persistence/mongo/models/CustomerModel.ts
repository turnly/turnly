/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { Customer } from 'Customers/domain/entities/Customer'
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
      required: true,
    },
    email: {
      type: String,
    },
    country: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    hasWhatsapp: {
      type: Boolean,
    },
    showNameSignage: {
      type: Boolean,
    },
    companyId: {
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
  { timestamps: true }
)

export const CustomerModel = mongoose.model<CustomerDocument, ICustomerModel>(
  'Customer',
  schema
)