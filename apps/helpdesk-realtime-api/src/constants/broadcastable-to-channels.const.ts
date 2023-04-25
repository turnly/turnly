/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { BroadcastableEvents } from './broadcastable-events.enum'

/**
 * Broadcastable events.
 *
 * @description Events that can be broadcasted to channels.
 */
export const BROADCASTABLE_TO_CHANNELS = {
  helpdesk: [
    /**
     * Ticket events
     */
    BroadcastableEvents.TICKET_CREATED,
    BroadcastableEvents.TICKET_ANNOUNCED,
    BroadcastableEvents.TICKET_CANCELLED,
  ],
}
