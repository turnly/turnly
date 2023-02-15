/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { DateTime, EntityAttributes } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class TicketsMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Ticket>> | undefined
  ): Producers.QueuingSystem.Ticket {
    const ticket = new Producers.QueuingSystem.Ticket()

    if (entity) {
      ticket.setId(entity.id)
      ticket.setStatus(entity.status)
      ticket.setDisplayCode(entity.displayCode)
      ticket.setServiceId(entity.serviceId)
      ticket.setLocationId(entity.locationId)
      ticket.setCustomerId(entity.customerId)
      ticket.setPriority(entity.priority)
      ticket.setSource(entity.source)

      if (entity.createdAt)
        ticket.setCreatedAt(DateTime.fromJSDate(entity.createdAt).toISO())

      if (entity.assigneeId) ticket.setAssigneeId(entity.assigneeId)

      if (entity.rating) {
        const rating = new Producers.QueuingSystem.Ticket.Rating()
          .setScore(entity.rating.score)
          .setComment(entity.rating.comment ?? '')

        ticket.setRating(rating)
      }

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.QueuingSystem.Extra()
            .setKey(extra.key)
            .setValue(extra.value)
        )

        ticket.setExtrasList(extras)
      }
    }

    return ticket
  }
}
