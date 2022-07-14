/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { ILocationsReadableRepo } from 'Locations/domain/contracts/ILocationsRepo'
import { Location } from 'Locations/domain/entities/Location'

import { FindLocationsQuery } from './FindLocationsQuery'

@QueryHandler(FindLocationsQuery)
export class FindLocationsQueryHandler
  implements IQueryHandler<FindLocationsQuery, Nullable<Location[]>>
{
  public constructor(
    private readonly locationsReadableRepo: ILocationsReadableRepo
  ) {}

  public async execute({
    searchQuery,
    country,
    organizationId,
    latitude: lat,
    longitude: lng,
    limit,
    offset,
  }: FindLocationsQuery) {
    const query = new QueryBuilder<Location>()
      .equal('country', country)
      .equal('organizationId', organizationId)
      .matches(['name', 'address', 'country'], searchQuery)
      .orderByGeo('coordinates', { lat, lng })
      .orderByAlphabetical(['name'])
      .getMany(offset, limit)

    /**
     * @todo Implement location status filter
     * @todo Add filters for open locations (Schedules and Holidays)
     */

    return await this.locationsReadableRepo.find(query)
  }
}
