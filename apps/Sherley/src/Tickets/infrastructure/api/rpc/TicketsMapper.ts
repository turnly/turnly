import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'

export class TicketMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Ticket>> | undefined
  ): Producers.Sherley.Ticket {
    const ticket = new Producers.Sherley.Ticket()

    if (entity) {
      ticket.setId(entity.id)
      ticket.setStatus(entity.status)
      ticket.setDisplayCode(entity.displayCode)
      ticket.setServiceId(entity.serviceId)
      ticket.setLocationId(entity.locationId)
      ticket.setCustomerId(entity.customerId)
      ticket.setCompanyId(entity.companyId)
      ticket.setCreatedAt(entity.createdAt.toDateString())
      ticket.setPriority(entity.priority)

      if (entity.assigneeId) ticket.setAssigneeId(entity.assigneeId)

      if (entity.rating) {
        const rating = new Producers.Sherley.Ticket.Rating()
          .setScore(entity.rating.score)
          .setComment(entity.rating.comment ?? '')

        ticket.setRating(rating)
      }

      if (entity.extra) {
        const extras = entity.extra.map(extra =>
          new Producers.Sherley.Extra().setKey(extra.key).setValue(extra.value)
        )

        ticket.setExtrasList(extras)
      }
    }

    return ticket
  }
}