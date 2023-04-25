/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import {
  GetWidgetResponse,
  Meta,
  Widget,
} from '../../../src/producers/channels'

export class WidgetsResponseMother {
  static randomForGetOne(): GetWidgetResponse {
    const widget = new Widget()
      .setId(ObjectMother.uuid('int'))
      .setName(ObjectMother.names())
      .setOriginsList(ObjectMother.repeater(ObjectMother.url, 3))
      .setOrganizationId(ObjectMother.uuid('org'))

    return new GetWidgetResponse().setData(widget)
  }

  static randomForGetOneError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetWidgetResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetWidgetResponse().setMeta(meta)
  }
}
