import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IOrganizationsReadableRepo } from 'Organizations/domain/contracts/IOrganizationsRepo'
import { Organization } from 'Organizations/domain/entities/Organization'

import { OrganizationByIdQuery } from './OrganizationByIdQuery'

@QueryHandler(OrganizationByIdQuery)
export class OrganizationByIdQueryHandler
  implements IQueryHandler<OrganizationByIdQuery, Nullable<Organization>>
{
  public constructor(
    private readonly organizationsReadableRepo: IOrganizationsReadableRepo
  ) {}

  public async execute({ id }: OrganizationByIdQuery) {
    const query = new QueryBuilder<Organization>().equal('id', id).getOne()

    return await this.organizationsReadableRepo.getOne(query)
  }
}
