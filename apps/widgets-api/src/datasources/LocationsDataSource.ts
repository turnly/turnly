import { Guid } from '@turnly/common'
import { GraphException } from 'shared/GraphException'

import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'
import { Locations } from './common/services'

@CacheSource()
export class LocationsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid, companyId: Guid) {
    const { data: location, meta } = await Locations.getOne({
      id,

      companyId,
    })

    if (!location) throw new GraphException(meta)

    return location
  }
}
