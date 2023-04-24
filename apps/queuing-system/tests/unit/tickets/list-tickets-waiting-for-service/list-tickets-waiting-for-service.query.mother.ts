/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { ListTicketsWaitingForServiceQuery } from '../../../../src/tickets/list-tickets-waiting-for-service'

export class ListTicketsWaitingForServiceQueryMother {
  static create(
    serviceIds: Guid[] = ObjectMother.repeater(
      () => ObjectMother.uuid('srv'),
      ObjectMother.integer(1)
    ),
    organizationId: Guid = ObjectMother.uuid('org')
  ): ListTicketsWaitingForServiceQuery {
    return new ListTicketsWaitingForServiceQuery(serviceIds, organizationId)
  }

  static random(): ListTicketsWaitingForServiceQuery {
    return this.create()
  }
}
