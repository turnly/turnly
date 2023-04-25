/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { DataSource } from '@turnly/graph'

import { Agents } from '../api.service'
import { IContext } from '../context.type'

export class AgentsDataSource extends DataSource<IContext> {
  public constructor() {
    super()
  }

  public async getByUserId(userId: Guid) {
    return await Agents.getByUserId({ userId })
  }
}
