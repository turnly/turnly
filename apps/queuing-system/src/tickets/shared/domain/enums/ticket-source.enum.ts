/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

/**
 * Ticket sources
 *
 * @description Tickets can be created from different sources, this enumeration allows you to identify which source the ticket is in.
 *
 * @enum
 * @author Turnly
 */
export enum TicketSource {
  FROM_API = 'api',
  FROM_MEMBER = 'member',
  FROM_WIDGET = 'channels.widgets',
  FROM_KIOSK = 'channels.kiosk',
}
