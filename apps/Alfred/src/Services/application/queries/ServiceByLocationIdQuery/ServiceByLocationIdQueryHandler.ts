import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IServiceReadableRepo } from 'Services/domain/contracts/IServicesRepo'
import { Service } from 'Services/domain/entities/Service'

import { ServiceByLocationIdQuery } from './ServiceByLocationIdQuery'

@QueryHandler(ServiceByLocationIdQuery)
export class ServiceByLocationIdQueryHandler
  implements IQueryHandler<ServiceByLocationIdQuery, Nullable<Service>>
{
  public constructor(
    private readonly servicesReadableRepo: IServiceReadableRepo
  ) {}

  public async execute({ params }: ServiceByLocationIdQuery) {
    const { locationId, companyId } = params

    const query = new QueryBuilder<Service>()
      .equal('locationId', locationId)
      .equal('companyId', companyId)
      .getOne()

    return await this.servicesReadableRepo.getOne(query)
  }
}
