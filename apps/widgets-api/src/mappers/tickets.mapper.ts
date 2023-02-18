/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Ticket as T } from '@turnly/rpc/dist/producers/queuing-system'
import { TicketModel } from 'models/ticket.model'

export class TicketsMapper {
  public static toDTO(
    ticket: T.AsObject
  ): Omit<
    TicketModel,
    'customer' | 'location' | 'service' | 'calledToDesk' | 'beforeYours'
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
