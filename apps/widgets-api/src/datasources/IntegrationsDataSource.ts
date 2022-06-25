import { Guid } from '@turnly/common'

import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'
import { Integrations } from './common/services'

@CacheSource()
export class IntegrationsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    return await Integrations.getOne({ id })
  }
}
