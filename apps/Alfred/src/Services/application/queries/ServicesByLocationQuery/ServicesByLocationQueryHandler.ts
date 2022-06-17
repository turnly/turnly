import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IServiceReadableRepo } from 'Services/domain/contracts/IServicesRepo'
import { Service } from 'Services/domain/entities/Service'

import { ServicesByLocationQuery } from './ServicesByLocationQuery'

@QueryHandler(ServicesByLocationQuery)
export class ServicesByLocationQueryHandler
  implements IQueryHandler<ServicesByLocationQuery, Nullable<Service[]>>
{
  public constructor(
    private readonly servicesReadableRepo: IServiceReadableRepo
  ) {}

  public async execute({ params }: ServicesByLocationQuery) {
    const { locationId, companyId } = params

    const query = new QueryBuilder<Service>()
      .equal('locationId', locationId)
      .equal('companyId', companyId)
      .getMany()

    return await this.servicesReadableRepo.find(query)
  }
}
