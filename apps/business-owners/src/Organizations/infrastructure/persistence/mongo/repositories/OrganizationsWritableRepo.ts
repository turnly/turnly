/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoWritableRepo } from '@turnly/shared'
import { IOrganizationsMapper } from 'Organizations/domain/contracts/IOrganizationsMapper'
import { IOrganizationsWritableRepo } from 'Organizations/domain/contracts/IOrganizationsRepo'
import { Organization } from 'Organizations/domain/entities/Organization'

import {
  IOrganizationDocument,
  OrganizationModel,
} from '../models/OrganizationModel'

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
