/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Ticket as T } from '@turnly/rpc/dist/producers/queuing-system'
import { TicketModel } from 'models/TicketModel'

export class TicketsMapper {
  public static toDTO(
    ticket: T.AsObject
  ): Omit<
    TicketModel,
    'customer' | 'location' | 'service' | 'calledTo' | 'beforeYours'
  > {
    return {
      id: ticket.id,
      status: ticket.status,
      displayCode: ticket.displayCode,
      customerId: ticket.customerId,
      serviceId: ticket.serviceId,
      locationId: ticket.locationId,
    }
  }
}
