/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export enum BroadcastableEvents {
  /**
   * Ticket events
   */
  TICKET_CREATED = 'ticket.created',
  TICKET_ANNOUNCED = 'ticket.announced',
  TICKET_CANCELLED = 'ticket.cancelled',
  TICKET_RETURNED = 'ticket.returned',

  /**
   * Customer events
   */
  CUSTOMER_CREATED = 'customer.created',
  CUSTOMER_UPDATED = 'customer.updated',
  CUSTOMER_DELETED = 'customer.deleted',

  /**
   * Service events
   */
  SERVICE_CREATED = 'service.created',
  SERVICE_UPDATED = 'service.updated',
  SERVICE_DELETED = 'service.deleted',
}
