/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/core'
import { IOpeningHoursReadableRepo } from 'opening-hours/shared/domain/contracts/opening-hours-repo.interface'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

import { ListLocationHoursQuery } from './list-location-hours.query'

@QueryHandler(ListLocationHoursQuery)
export class ListLocationHoursQueryHandler
  implements IQueryHandler<ListLocationHoursQuery, Nullable<OpeningHour[]>>
{
  public constructor(
    private readonly openingHoursReadableRepo: IOpeningHoursReadableRepo
  ) {}

  public async execute({ locationId, organizationId }: ListLocationHoursQuery) {
    const query = new QueryBuilder<OpeningHour>()
      .equal('locationId', locationId)
      .equal('organizationId', organizationId)
      .getMany()

    return await this.openingHoursReadableRepo.find(query)
  }
}
