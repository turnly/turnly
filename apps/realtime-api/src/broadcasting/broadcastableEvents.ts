/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
export enum BroadcastableEvents {
  /**
   * Ticket events
   */
  TICKET_CREATED = 'ticket.created',
  TICKET_AVAILABLE = 'ticket.available',
  TICKET_ANNOUNCED = 'ticket.announced',
  TICKET_COMPLETED = 'ticket.completed',
  TICKET_CANCELLED = 'ticket.cancelled',
  TICKET_DISCARDED = 'ticket.discarded',
  TICKET_CALLED = 'ticket.called',
  TICKET_RECALLED = 'ticket.recalled',
  TICKET_NEAR_ATTENTION = 'ticket.near_attention',
  TICKET_REMOVED = 'ticket.removed',
  TICKET_INACTIVE = 'ticket.inactive',
  TICKET_ASSIGNED = 'ticket.assigned',
  TICKET_UNASSIGNED = 'ticket.unassigned',
  TICKET_REASSIGNED = 'ticket.reassigned',

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
