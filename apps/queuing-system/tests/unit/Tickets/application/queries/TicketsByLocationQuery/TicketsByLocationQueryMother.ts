/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'

import { TicketsByLocationQuery } from '../../../../../../src/Tickets/application/queries/TicketsByLocationQuery'

export class TicketsByLocationQueryMother {
  static create(
    locationId: Guid = ObjectMother.uuid('loc'),
    serviceIds: Guid[] = ObjectMother.repeater(
      () => ObjectMother.uuid('srv'),
      ObjectMother.integer(1)
    ),
    status = [TicketStatus.ANNOUNCED],
    searchQuery: string = ObjectMother.word(),
    organizationId: Guid = ObjectMother.uuid('org')
  ): TicketsByLocationQuery {
    return new TicketsByLocationQuery(
      locationId,
      organizationId,
      status,
      searchQuery,
      serviceIds
    )
  }

  static random(): TicketsByLocationQuery {
    return this.create()
  }
}
