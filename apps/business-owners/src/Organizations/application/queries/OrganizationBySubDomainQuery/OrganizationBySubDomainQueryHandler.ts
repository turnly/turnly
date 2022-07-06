/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IOrganizationsReadableRepo } from 'Organizations/domain/contracts/IOrganizationsRepo'
import { Organization } from 'Organizations/domain/entities/Organization'

import { OrganizationBySubdomainQuery } from './OrganizationBySubdomainQuery'

@QueryHandler(OrganizationBySubdomainQuery)
export class OrganizationBySubdomainQueryHandler
  implements
    IQueryHandler<OrganizationBySubdomainQuery, Nullable<Organization>>
{
  public constructor(
    private readonly organizationsReadableRepo: IOrganizationsReadableRepo
  ) {}

  public async execute({ subdomain }: OrganizationBySubdomainQuery) {
    const query = new QueryBuilder<Organization>()
      .equal('subdomain', subdomain)
      .getOne()

    return await this.organizationsReadableRepo.getOne(query)
  }
}
