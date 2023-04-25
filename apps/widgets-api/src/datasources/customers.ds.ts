/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { DataSource } from '@turnly/graph'

import { IContext } from '../context.type'
import { Customers } from '../api.service'

export class CustomersDataSource extends DataSource<IContext> {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    return await Customers.getOne({ id })
  }
}
