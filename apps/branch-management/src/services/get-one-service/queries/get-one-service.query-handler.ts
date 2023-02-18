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

import { GetOneServiceQuery } from './get-one-service.query'

@QueryHandler(GetOneServiceQuery)
export class GetOneServiceQueryHandler
  implements IQueryHandler<GetOneServiceQuery, Nullable<Service>>
{
  public constructor(
    private readonly servicesReadableRepo: IServicesReadableRepo
  ) {}

  public async execute({ id, organizationId }: GetOneServiceQuery) {
    const query = new QueryBuilder<Service>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    return await this.servicesReadableRepo.getOne(query)
  }
}
