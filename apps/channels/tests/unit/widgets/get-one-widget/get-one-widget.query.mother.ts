/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetOneWidgetQuery } from '../../../../src/widgets/get-one-widget'

export class GetOneWidgetQueryMother {
  static create(id: Guid = ObjectMother.uuid('int')): GetOneWidgetQuery {
    return GetOneWidgetQuery.build({ id })
  }

  static random(): GetOneWidgetQuery {
    return this.create()
  }
}
