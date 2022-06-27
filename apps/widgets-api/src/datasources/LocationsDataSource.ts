import { Guid } from '@turnly/common'
import { GraphException } from 'shared/GraphException'

import { Locations } from '../shared/services'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource()
export class LocationsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid, organizationId: Guid) {
    const { data: location, meta } = await Locations.getOne({
      id,

      organizationId,
    })

    if (!location) throw new GraphException(meta)

    return location
  }
}
