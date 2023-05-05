/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { IOrganizationsMapper } from 'organizations/shared/domain/contracts/organizations-mapper.interface'
import { IOrganizationsReadableRepo } from 'organizations/shared/domain/contracts/organizations-repo.interface'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

import { IOrganizationDocument, OrganizationModel } from './organization.model'

export class OrganizationsReadableRepo
  extends MongoReadableRepo<Organization, IOrganizationDocument>
  implements IOrganizationsReadableRepo
{
  public constructor(
    organizationsMapper: IOrganizationsMapper<IOrganizationDocument>
  ) {
    super(OrganizationModel, organizationsMapper)
  }
}
