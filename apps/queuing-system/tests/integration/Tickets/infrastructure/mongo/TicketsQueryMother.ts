import { QueryBuilder } from '@turnly/shared'

import { Ticket } from '../../../../../src/Tickets/domain/entities/Ticket'

/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
export class TicketsQueryMother {
  static getOneWith(ticket: Ticket) {
    const { id, customerId, locationId, serviceId } = ticket.toObject()

    return new QueryBuilder<Ticket>()
      .equal('id', id)
      .equal('customerId', customerId)
      .equal('locationId', locationId)
      .equal('serviceId', serviceId)
      .getOne()
  }

  static getManyIn(tickets: Ticket[]) {
    const ids = tickets.map(ticket => ticket.toObject().id)

    return new QueryBuilder<Ticket>().in('id', ids).getMany(0, ids.length)
  }
}
