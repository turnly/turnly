/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { ILocationsReadableRepo } from 'Locations/Shared/domain/contracts/ILocationsRepo'
import { Location } from 'Locations/Shared/domain/entities/Location'

import { GetOneLocationQuery } from './GetOneLocationQuery'

@QueryHandler(GetOneLocationQuery)
export class GetOneLocationQueryHandler
  implements IQueryHandler<GetOneLocationQuery, Nullable<Location>>
{
  public constructor(
    private readonly locationsReadableRepo: ILocationsReadableRepo
  ) {}

  public async execute({ id, organizationId }: GetOneLocationQuery) {
    const query = new QueryBuilder<Location>()
      .equal('id', id)
      .equal('organizationId', organizationId)
      .getOne()

    return await this.locationsReadableRepo.getOne(query)
  }
}
