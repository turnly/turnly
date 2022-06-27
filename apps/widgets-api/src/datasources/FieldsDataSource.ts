import { Guid } from '@turnly/common'
import { FieldModel } from 'models/FieldModel'
import { CacheTTL } from 'shared/CacheTTL'

import { Fields } from '../shared/services'
import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'

@CacheSource({ ttl: CacheTTL.THREE_MINUTES })
export class FieldsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async findCustomerFieldsByService(
    serviceId: Guid,
    organizationId: Guid
  ): Promise<FieldModel[]> {
    const data = (
      await Fields.findCustomerFieldsByService({
        serviceId,
        organizationId,
      })
    ).dataList

    if (!data) return []

    return data.map(
      ({ id, label, description, type, isRequired, processorsList }) => ({
        id,
        label,
        description,
        type,
        isRequired,
        hasProcessors: Boolean(processorsList.length),
      })
    )
  }
}
