/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { CacheTTL } from 'shared/CacheTTL'

import { Agents } from '../shared/api'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource({ ttl: CacheTTL.FIVE_MINUTES })
export class AgentsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getByUserId(userId: Guid) {
    return await Agents.getByUserId({ userId })
  }
}
