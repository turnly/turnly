/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
export enum RealtimeEvents {
  /**
   * Service events
   */
  SERVICE_TICKETS_AHEAD = 'service.tickets.ahead',
  SERVICE_TICKETS_BEHIND = 'service.tickets.behind',

  /**
   * Ticket events
   */
  TICKET_BEFORE_YOURS_UPDATED = 'ticket.before-yours.updated',

  /**
   * Global events
   */
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
}
