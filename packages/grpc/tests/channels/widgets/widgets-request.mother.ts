/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { IGetWidgetRequest } from '../../../src/consumers/channels'

export class WidgetsRequestMother {
  static randomForGetOne(): IGetWidgetRequest {
    return {
      id: ObjectMother.uuid('int'),
    }
  }

  static randomForGetOneEmpty(): IGetWidgetRequest {
    return {
      id: '',
    }
  }
}
