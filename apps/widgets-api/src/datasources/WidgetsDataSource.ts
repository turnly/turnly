/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'

import { Widgets } from '../shared/api'
import { isTurnlyCloud } from '../shared/config'
import { DataSource } from './common/DataSource'

export class WidgetsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    if (isTurnlyCloud()) return Widgets.getOne({ id })

    return new Promise(resolve => {
      resolve({
        data: {
          id: process.env.WIDGET_ID,
          name: process.env.ORGANIZATION_NAME,
          organizationId: process.env.ORGANIZATION_ID,
        },
      })
    })
  }
}
