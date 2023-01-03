/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export enum RealtimeEventsForHelpdesk {
  /**
   * Ticket events
   */
  TICKETS_CHANGES = 'helpdesk.tickets.changes',

  /**
   * Global events
   */
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
}
