/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { TicketsWaitingForServiceQuery } from '../../../../../../src/Tickets/application/queries/TicketsWaitingForServiceQuery'

export class TicketsWaitingForServiceQueryMother {
  static create(
    serviceIds: Guid[] = ObjectMother.repeater(
      () => ObjectMother.uuid('srv'),
      ObjectMother.integer(1)
    ),
    organizationId: Guid = ObjectMother.uuid('org')
  ): TicketsWaitingForServiceQuery {
    return new TicketsWaitingForServiceQuery(serviceIds, organizationId)
  }

  static random(): TicketsWaitingForServiceQuery {
    return this.create()
  }
}
