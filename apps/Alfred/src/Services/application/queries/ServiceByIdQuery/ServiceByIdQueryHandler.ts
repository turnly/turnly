import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IServiceReadableRepo } from 'Services/domain/contracts/IServicesRepo'
import { Service } from 'Services/domain/entities/Service'

import { ServiceByIdQuery } from './ServiceByIdQuery'

@QueryHandler(ServiceByIdQuery)
export class ServiceByIdQueryHandler
  implements IQueryHandler<ServiceByIdQuery, Nullable<Service>>
{
  public constructor(
    private readonly servicesReadableRepo: IServiceReadableRepo
  ) {}

  public async execute({ params }: ServiceByIdQuery) {
    const { id, companyId } = params

    const query = new QueryBuilder<Service>()
      .equal('id', id)
      .equal('companyId', companyId)
      .getOne()

    return await this.servicesReadableRepo.getOne(query)
  }
}
