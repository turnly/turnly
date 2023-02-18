/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { IGetWidgetResponse } from '@turnly/rpc/dist/consumers/channels'

import { Widgets } from '../shared/api'
import { isCommunityEdition } from '../shared/config'
import { DataSource } from './common/data-source'

export class WidgetsDataSource extends DataSource {
  public constructor() {
    super()
  }

  public async getOne(id: Guid) {
    if (isCommunityEdition()) {
      const data = {
        id: process.env.WIDGET_ID as string,
        name: process.env.ORGANIZATION_NAME as string,
        organizationId: process.env.ORGANIZATION_ID as string,
        originsList: [],
        position: '',
        design: '',
        primaryColor: '',
        secondaryColor: '',
        primaryBackground: '',
        secondaryBackground: '',
        disabledTelemetry: false,
        openByDefault: false,
        showFullscreen: false,
        showCloseButton: true,
      }

      return new Promise<IGetWidgetResponse>(resolve => resolve({ data }))
    }

    return Widgets.getOne({ id })
  }
}
