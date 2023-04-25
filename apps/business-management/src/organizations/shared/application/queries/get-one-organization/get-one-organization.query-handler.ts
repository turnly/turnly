/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { IOrganizationsReadableRepo } from 'organizations/shared/domain/contracts/organizations-repo.interface'
import { Organization } from 'organizations/shared/domain/entities/organization.entity'

import { GetOneOrganizationQuery } from './get-one-organization.query'

@QueryHandler(GetOneOrganizationQuery)
export class GetOneOrganizationQueryHandler
  implements IQueryHandler<GetOneOrganizationQuery, Nullable<Organization>>
{
  public constructor(
    private readonly organizationsReadableRepo: IOrganizationsReadableRepo
  ) {}

  public async execute({ id }: GetOneOrganizationQuery) {
    const query = new QueryBuilder<Organization>().equal('id', id).getOne()

    return await this.organizationsReadableRepo.getOne(query)
  }
}
