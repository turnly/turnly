import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IOrganizationsReadableRepo } from 'Organizations/domain/contracts/IOrganizationsRepo'
import { Organization } from 'Organizations/domain/entities/Organization'

import { OrganizationBySubDomainQuery } from './OrganizationBySubDomainQuery'

@QueryHandler(OrganizationBySubDomainQuery)
export class OrganizationBySubDomainQueryHandler
  implements
    IQueryHandler<OrganizationBySubDomainQuery, Nullable<Organization>>
{
  public constructor(
    private readonly organizationsReadableRepo: IOrganizationsReadableRepo
  ) {}

  public async execute({ subdomain }: OrganizationBySubDomainQuery) {
    const query = new QueryBuilder<Organization>()
      .equal('subdomain', subdomain)
      .getOne()

    return await this.organizationsReadableRepo.getOne(query)
  }
}
