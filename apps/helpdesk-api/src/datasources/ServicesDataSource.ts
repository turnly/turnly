/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { GraphException } from 'shared/GraphException'

import { Services } from '../shared/api'
// import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

// @CacheSource()
export class ServicesDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    const { data: service, meta } = await Services.getOne({ id })

    if (!service) throw new GraphException(meta)

    return service
  }
}
