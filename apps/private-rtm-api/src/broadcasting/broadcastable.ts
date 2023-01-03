/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { BroadcastableEvents } from './broadcastableEvents'

/**
 * Broadcastable events.
 *
 * @description Events that can be broadcasted to channels.
 */
export const broadcastable = {
  stream: [
    /**
     * Ticket events
     */
    BroadcastableEvents.TICKET_ANNOUNCED,
    BroadcastableEvents.TICKET_CANCELLED,
    BroadcastableEvents.TICKET_RETURNED,

    /**
     * Customer events
     */
    BroadcastableEvents.CUSTOMER_CREATED,
    BroadcastableEvents.CUSTOMER_UPDATED,
    BroadcastableEvents.CUSTOMER_DELETED,
  ],
  helpdesk: [
    /**
     * Ticket events
     */
    BroadcastableEvents.TICKET_CREATED,
    BroadcastableEvents.TICKET_ANNOUNCED,
    BroadcastableEvents.TICKET_CANCELLED,
  ],
}
