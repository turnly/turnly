/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IServicesReadableRepo } from 'services/shared/domain/contracts/services-repo.interface'
import { Service } from 'services/shared/domain/entities/service.entity'

import { ListServicesOfOneLocationQuery } from './list-services-of-one-location.query'

@QueryHandler(ListServicesOfOneLocationQuery)
export class ListServicesOfOneLocationQueryHandler
  implements IQueryHandler<ListServicesOfOneLocationQuery, Nullable<Service[]>>
{
  public constructor(
    private readonly servicesReadableRepo: IServicesReadableRepo
  ) {}

  public async execute({
    locationId,
    organizationId,
  }: ListServicesOfOneLocationQuery) {
    const query = new QueryBuilder<Service>()
      .equal('locationId', locationId)
      .equal('organizationId', organizationId)
      .getMany()

    return await this.servicesReadableRepo.find(query)
  }
}
