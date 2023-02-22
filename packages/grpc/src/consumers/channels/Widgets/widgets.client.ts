/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetWidgetRequest, WidgetsClient } from '../../../producers/channels'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IGetWidgetRequest,
  IGetWidgetResponse,
  IWidgetsClient,
} from './widgets.type'

export class Widgets extends Client<WidgetsClient> implements IWidgetsClient {
  public constructor(config?: ClientConfig) {
    super(WidgetsClient, {
      internalAddress: 'channels.turnly.local',
      ...config,
    })
  }

  public async getOne(request: IGetWidgetRequest): Promise<IGetWidgetResponse> {
    const req = new GetWidgetRequest().setId(request.id)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
