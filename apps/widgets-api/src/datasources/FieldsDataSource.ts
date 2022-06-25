import { Guid } from '@turnly/common'
import { FieldModel } from 'models/FieldModel'

import { CacheSource } from './common/CacheSource'
import { DataSource } from './common/DataSource'
import { Fields } from './common/services'

@CacheSource()
export class FieldsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async findCustomerFieldsByService(
    serviceId: Guid,
    companyId: Guid
  ): Promise<FieldModel[]> {
    const data = (
      await Fields.findCustomerFieldsByService({
        serviceId,
        companyId,
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
