/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { GraphException } from 'shared/GraphException'

import { Locations } from '../shared/api'
import { DataSource } from './common/DataSource'

export class LocationsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    const { data: location, meta } = await Locations.getOne({
      id,
    })

    if (!location) throw new GraphException(meta)

    return location
  }

  public async searchAvailableLocationsForServing({
    latitude = '',
    longitude = '',
    ...params
  }: {
    searchQuery: string
    country: string
    latitude: string
    longitude: string
    limit: number
    offset: number
  }) {
    const { dataList: locations, meta } =
      await Locations.searchAvailableLocationsForServing({
        latitude,
        longitude,
        ...params,
      })

    if (!locations?.length) throw new GraphException(meta)

    return locations
  }
}
