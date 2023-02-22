/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'
import { TicketStatus } from 'Tickets/Shared/domain/enums/TicketStatus'

import { TicketsForServingFromLocationQuery } from '../../../../src/Tickets/TicketsForServingFromLocation'

export class TicketsForServingFromLocationQueryMother {
  static create(
    locationId: Guid = ObjectMother.uuid('loc'),
    serviceIds: Guid[] = ObjectMother.repeater(
      () => ObjectMother.uuid('srv'),
      ObjectMother.integer(1)
    ),
    status = [TicketStatus.ANNOUNCED],
    searchQuery: string = ObjectMother.word(),
    organizationId: Guid = ObjectMother.uuid('org')
  ): TicketsForServingFromLocationQuery {
    return new TicketsForServingFromLocationQuery(
      locationId,
      organizationId,
      status,
      searchQuery,
      serviceIds
    )
  }

  static random(): TicketsForServingFromLocationQuery {
    return this.create()
  }
}
