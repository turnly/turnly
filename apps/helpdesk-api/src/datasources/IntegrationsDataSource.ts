/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'

// import { CacheTTL } from 'shared/CacheTTL'
import { Integrations } from '../shared/api'
// import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

// @CacheSource({ ttl: CacheTTL.FIVE_MINUTES })
export class IntegrationsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    return await Integrations.getOne({ id })
  }
}
