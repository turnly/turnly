/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'

import { Customers } from '../shared/api'
import { DataSource } from './common/data-source'

export class CustomersDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    return await Customers.getOne({ id })
  }
}
