import { Guid } from '@turnly/common'

import { CacheSource } from './CacheSource'
import { DataSource } from './DataSource'
import { Integrations } from './services'

@CacheSource()
export class IntegrationsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    return await Integrations.getOne({ id })
  }
}
