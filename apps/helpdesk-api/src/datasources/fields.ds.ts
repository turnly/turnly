/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { DataSource } from '@turnly/graph'
import { FieldModel } from 'models/field.model'

import { Fields } from '../api.service'
import { IContext } from '../context.type'

export class FieldsDataSource extends DataSource<IContext> {
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

    return data.map(({ id, label, description }) => ({
      id,
      label,
      description,
    }))
  }
}
