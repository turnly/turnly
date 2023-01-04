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
  TICKET_AVAILABLE = 'ticket.available',
  TICKET_ANNOUNCED = 'ticket.announced',
  TICKET_COMPLETED = 'ticket.completed',
  TICKET_CANCELLED = 'ticket.cancelled',
  TICKET_DISCARDED = 'ticket.discarded',
  TICKET_CALLED = 'ticket.called',
  TICKET_RECALLED = 'ticket.recalled',
  TICKET_RETURNED = 'ticket.returned',
  TICKET_REMOVED = 'ticket.removed',
  TICKET_INACTIVE = 'ticket.inactive',
  TICKET_ASSIGNED = 'ticket.assigned',
  TICKET_UNASSIGNED = 'ticket.unassigned',
  TICKET_REASSIGNED = 'ticket.reassigned',
}
