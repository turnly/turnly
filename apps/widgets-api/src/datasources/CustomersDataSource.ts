import { Guid } from '@turnly/common'

import { CacheSource } from './CacheSource'
import { DataSource } from './DataSource'
import { Customers } from './services'

@CacheSource()
export class CustomersDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid, companyId: Guid) {
    return await Customers.getOne({ id, companyId })
  }
}
