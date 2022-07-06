/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/shared'
import { IOrganizationsMapper } from 'Organizations/domain/contracts/IOrganizationsMapper'
import { IOrganizationsReadableRepo } from 'Organizations/domain/contracts/IOrganizationsRepo'
import { Organization } from 'Organizations/domain/entities/Organization'

import {
  IOrganizationDocument,
  OrganizationModel,
} from '../models/OrganizationModel'

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
