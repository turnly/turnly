/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { FieldModel } from 'models/FieldModel'

// import { CacheTTL } from 'shared/CacheTTL'
import { Fields } from '../shared/api'
// import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

// @CacheSource({ ttl: CacheTTL.THREE_MINUTES })
export class FieldsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async findCustomerFieldsByService(
    serviceId: Guid
  ): Promise<FieldModel[]> {
    const data = (
      await Fields.findCustomerFieldsByService({
        serviceId,
      })
    ).dataList

    if (!data) return []

    return data.map(({ id, label, description }) => ({
      id,
      label,
      description,
    }))
  }
}
