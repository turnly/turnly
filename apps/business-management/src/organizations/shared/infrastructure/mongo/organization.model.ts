/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes, timestamps } from '@turnly/core'
import mongoose, { Document, Model, Schema } from 'mongoose'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'
import { OrganizationStatus } from 'organizations/shared/domain/enums/organization-status.enum'

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
    disabledTelemetry: {
      type: Boolean,
      default: false,
    },
    brandingLogo: {
      type: String,
    },
    brandingPrimaryColor: {
      type: String,
    },
    brandingSecondaryColor: {
      type: String,
    },
    brandingPrimaryBackground: {
      type: String,
    },
    brandingSecondaryBackground: {
      type: String,
    },
    brandingDesignType: {
      type: String,
    },
  },
  { timestamps }
)

export const OrganizationModel = mongoose.model<
  IOrganizationDocument,
  IOrganizationModel
>('Organization', schema)
