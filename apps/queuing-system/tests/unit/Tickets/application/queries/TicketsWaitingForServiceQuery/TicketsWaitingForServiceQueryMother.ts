/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { TicketsWaitingForServiceQuery } from '../../../../../../src/Tickets/application/queries/TicketsWaitingForServiceQuery'

export class TicketsWaitingForServiceQueryMother {
  static create(
    serviceIds: Guid[] = ObjectMother.repeater(
      () => ObjectMother.uuid('srv'),
      10
    ),
    organizationId: Guid = ObjectMother.uuid('org')
  ): TicketsWaitingForServiceQuery {
    return new TicketsWaitingForServiceQuery(serviceIds, organizationId)
  }

  static random(): TicketsWaitingForServiceQuery {
    return this.create()
  }
}
