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
  FROM_API = 'from_api',
  FROM_AGENT = 'from_agent',
  FROM_SYSTEM = 'from_system',
  FROM_WIDGET = 'from_channel_widget',
  FROM_CHAT = 'from_channel_chat',
  FROM_VOICE = 'from_channel_voice',
  FROM_MOBILE = 'from_channel_mobile',
}
