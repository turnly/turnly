/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export enum RealtimeEventsForQueuing {
  /**
   * Service events
   */
  SERVICE_TICKETS_AHEAD = 'queuing.service.tickets.ahead',
  SERVICE_TICKETS_BEHIND = 'queuing.service.tickets.behind',

  /**
   * Ticket events
   */
  TICKETS_BEFORE_YOURS = 'queuing.tickets.before-yours',
  TICKET_CALLED = 'queuing.tickets.called-to-desk',
  TICKET_CANCELLED = 'queuing.tickets.cancelled',

  /**
   * Global events
   */
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
}
