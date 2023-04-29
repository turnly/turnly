/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { DataSource, GraphException } from '@turnly/graph'

import { Locations } from '../api.service'
import { IContext } from '../context.type'

export class LocationsDataSource extends DataSource<IContext> {
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
