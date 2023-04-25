/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { WidgetStatus } from 'widgets/shared/domain/enums/widget-status.enum'

import { GetOneWidgetQuery } from '../../../../../src/widgets/shared/application/queries'
import { Widget } from '../../../../../src/widgets/shared/domain/entities/widget.entity'

export class WidgetMother {
  static create(
    name: string = ObjectMother.names(),
    status: WidgetStatus = WidgetStatus.ACTIVE,
    origins: string[] = [ObjectMother.names(), ObjectMother.names()],
    organizationId: Guid = ObjectMother.uuid('org')
  ): Widget {
    return Widget.create({
      name,
      status,
      origins,
      organizationId,
    })
  }

  static random(): Widget {
    return WidgetMother.create()
  }

  static collection(max = ObjectMother.integer(2)): Widget[] {
    return ObjectMother.repeater(WidgetMother.random, max)
  }

  static fromExistingWidgetOnQuery(query: GetOneWidgetQuery): Widget {
    return Widget.build({
      ...this.random().toObject(),
      id: query.id,
    })
  }
}
