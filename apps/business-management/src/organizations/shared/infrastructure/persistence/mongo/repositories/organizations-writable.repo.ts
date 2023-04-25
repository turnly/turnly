/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/core'
import { IOrganizationsMapper } from 'organizations/shared/domain/contracts/organizations-mapper.interface'
import { IOrganizationsWritableRepo } from 'organizations/shared/domain/contracts/organizations-repo.interface'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

import {
  IOrganizationDocument,
  OrganizationModel,
} from '../models/organization.model'

export class OrganizationsWritableRepo
  extends MongoWritableRepo<Organization, IOrganizationDocument>
  implements IOrganizationsWritableRepo
{
  public constructor(
    organizationsMapper: IOrganizationsMapper<IOrganizationDocument>
  ) {
    super(OrganizationModel, organizationsMapper)
  }
}
