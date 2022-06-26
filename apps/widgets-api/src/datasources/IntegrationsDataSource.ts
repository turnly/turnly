import { Guid } from '@turnly/common'
import { CacheTTL } from 'shared/CacheTTL'

import { Integrations } from '../shared/services'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource({ ttl: CacheTTL.FIVE_MINUTES })
export class IntegrationsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    return await Integrations.getOne({ id })
  }
}
