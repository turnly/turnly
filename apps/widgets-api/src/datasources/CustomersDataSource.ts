/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { CacheTTL } from 'shared/CacheTTL'

import { Customers } from '../shared/api'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource({ ttl: CacheTTL.FIVE_MINUTES })
export class CustomersDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    return await Customers.getOne({ id })
  }
}
