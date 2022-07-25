/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { GraphException } from 'shared/GraphException'

import { Locations } from '../shared/api'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource()
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

  public async find(params: {
    searchQuery: string
    country: string
    latitude: number
    longitude: number
    limit: number
    offset: number
  }) {
    const { dataList: locations, meta } = await Locations.find({
      ...params,
      findQuery: params.searchQuery,
    })

    if (!locations.length) throw new GraphException(meta)

    return locations
  }
}
