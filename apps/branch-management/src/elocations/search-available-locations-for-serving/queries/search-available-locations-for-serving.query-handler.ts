/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { IQueryHandler, QueryBuilder, QueryHandler } from '@turnly/shared'
import { ILocationsReadableRepo } from 'locations/shared/domain/contracts/locations-repo.interface'
import { Location } from 'locations/shared/domain/entities/location.entity'
import { LocationStatus } from 'locations/shared/domain/enums/location-status.enum'

import { SearchAvailableLocationsForServingQuery } from './search-available-locations-for-serving.query'

@QueryHandler(SearchAvailableLocationsForServingQuery)
export class SearchAvailableLocationsForServingQueryHandler
  implements
    IQueryHandler<
      SearchAvailableLocationsForServingQuery,
      Nullable<Location[]>
    >
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
  }: SearchAvailableLocationsForServingQuery) {
    const query = new QueryBuilder<Location>()
      .equal('organizationId', organizationId)
      .equal('status', LocationStatus.COMPLETE)
      .orderByAlphabetical(['name'])

    if (country) query.equal('country', country)
    if (searchQuery) query.matches(['name', 'address', 'country'], searchQuery)
    if (lat && lng) query.orderByGeo('coordinates', { lat, lng })

    /**
     * TODO: Implement location status filter-- (Testing it)
     * TODO: Add filters for open locations (Schedules and Holidays)
     */

    return await this.locationsReadableRepo.find(query.getMany(offset, limit))
  }
}
