import { Guid } from '@turnly/common'
import { CacheTTL } from 'shared/CacheTTL'

import { Customers } from '../shared/services'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource({ ttl: CacheTTL.FIVE_MINUTES })
export class CustomersDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid, organizationId: Guid) {
    return await Customers.getOne({ id, organizationId })
  }
}
