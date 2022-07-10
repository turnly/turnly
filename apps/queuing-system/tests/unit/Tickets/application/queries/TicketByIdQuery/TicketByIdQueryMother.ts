/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'

import { TicketByIdQuery } from '../../../../../../src/Tickets/application/queries/TicketByIdQuery'
import { ObjectMother } from '../../../../../shared/ObjectMother'

export class TicketByIdQueryMother {
  static create(
    id: Guid = ObjectMother.uuid('ticket'),
    customerId: Guid = ObjectMother.uuid('cust'),
    organizationId: Guid = ObjectMother.uuid('org')
  ): TicketByIdQuery {
    return new TicketByIdQuery(id, customerId, organizationId)
  }

  static random(): TicketByIdQuery {
    return this.create()
  }
}
