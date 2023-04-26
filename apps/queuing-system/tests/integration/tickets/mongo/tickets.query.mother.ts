/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { QueryBuilder } from '@turnly/core'

import { Ticket } from '../../../../src/tickets/shared/domain/entities/ticket.entity'

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
