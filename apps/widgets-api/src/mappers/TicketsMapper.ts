import { Ticket as T } from '@turnly/rpc/dist/producers/queuing-system'
import { DateTime } from '@turnly/shared'
import { Ticket } from 'models/Ticket'

export class TicketsMapper {
  public static toDTO(
    ticket: T.AsObject
  ): Omit<
    Ticket,
    'customer' | 'location' | 'service' | 'calledTo' | 'beforeYours'
  > {
    return {
      id: ticket.id,
      status: ticket.status,
      displayCode: ticket.displayCode,
      customerId: ticket.customerId,
      serviceId: ticket.serviceId,
      locationId: ticket.locationId,
      createdAt: DateTime.fromISO(ticket.createdAt).toJSDate(),
    }
  }
}
