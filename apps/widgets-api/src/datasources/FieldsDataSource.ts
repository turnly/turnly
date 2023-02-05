/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { FieldModel } from 'models/FieldModel'

import { Fields } from '../shared/api'
import { DataSource } from './common/DataSource'

export class FieldsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async findCustomerFieldsByService(
    serviceId: Guid
  ): Promise<FieldModel[]> {
    const data = (
      await Fields.findCustomerFieldsByService({
        serviceId,
      })
    ).dataList

    if (!data) return []

    return data.map(
      ({
        id,
        label,
        description,
        type,
        placeholder,
        isRequired,
        processorsList,
        extrasList: extra,
      }) => ({
        id,
        label,
        description,
        type,
        placeholder,
        isRequired,
        hasProcessors: Boolean(processorsList.length),
        extra,
      })
    )
  }
}
