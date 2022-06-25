import { Guid } from '@turnly/common'

import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'
import { Customers } from './common/services'

@CacheSource()
export class CustomersDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid, companyId: Guid) {
    return await Customers.getOne({ id, companyId })
  }
}
