/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { IServicesReadableRepo } from 'Services/domain/contracts/IServicesRepo'
import { Service } from 'Services/domain/entities/Service'

import { ServiceByIdQuery } from './ServiceByIdQuery'

@QueryHandler(ServiceByIdQuery)
export class ServiceByIdQueryHandler
  implements IQueryHandler<ServiceByIdQuery, Nullable<Service>>
{
  public constructor(
    private readonly servicesReadableRepo: IServicesReadableRepo
  ) {}

  public async execute({ id, organizationId }: ServiceByIdQuery) {
    const query = new QueryBuilder<Service>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    return await this.servicesReadableRepo.getOne(query)
  }
}
