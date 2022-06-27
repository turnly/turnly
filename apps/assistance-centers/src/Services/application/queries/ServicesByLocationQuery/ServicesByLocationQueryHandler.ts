import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IServicesReadableRepo } from 'Services/domain/contracts/IServicesRepo'
import { Service } from 'Services/domain/entities/Service'

import { ServicesByLocationQuery } from './ServicesByLocationQuery'

@QueryHandler(ServicesByLocationQuery)
export class ServicesByLocationQueryHandler
  implements IQueryHandler<ServicesByLocationQuery, Nullable<Service[]>>
{
  public constructor(
    private readonly servicesReadableRepo: IServicesReadableRepo
  ) {}

  public async execute({
    locationId,
    organizationId,
  }: ServicesByLocationQuery) {
    const query = new QueryBuilder<Service>()
      .equal('locationId', locationId)
      .equal('organizationId', organizationId)
      .getMany()

    return await this.servicesReadableRepo.find(query)
  }
}
