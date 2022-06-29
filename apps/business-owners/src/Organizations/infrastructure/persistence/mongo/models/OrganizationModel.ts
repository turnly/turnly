/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes, timestamps } from '@turnly/shared'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Organization } from 'Organizations/domain/entities/Organization'
import { OrganizationStatus } from 'Organizations/domain/enums/OrganizationStatus'

export interface IOrganizationDocument
  extends Omit<EntityAttributes<Organization>, 'id'>,
    Document {}

export type IOrganizationModel = Model<IOrganizationDocument>

const schema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: OrganizationStatus,
      required: true,
    },
    subdomain: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps }
)

export const OrganizationModel = mongoose.model<
  IOrganizationDocument,
  IOrganizationModel
>('Organization', schema)
