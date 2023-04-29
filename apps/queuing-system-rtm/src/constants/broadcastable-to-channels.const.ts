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
  queuing: [
    /**
     * Ticket events
     */
    BroadcastableEvents.TICKET_CREATED,
    BroadcastableEvents.TICKET_AVAILABLE,
    BroadcastableEvents.TICKET_ANNOUNCED,
    BroadcastableEvents.TICKET_COMPLETED,
    BroadcastableEvents.TICKET_CANCELLED,
    BroadcastableEvents.TICKET_DISCARDED,
    BroadcastableEvents.TICKET_CALLED,
    BroadcastableEvents.TICKET_RECALLED,
    BroadcastableEvents.TICKET_RETURNED,
    BroadcastableEvents.TICKET_REMOVED,
    BroadcastableEvents.TICKET_INACTIVE,
    BroadcastableEvents.TICKET_ASSIGNED,
    BroadcastableEvents.TICKET_UNASSIGNED,
    BroadcastableEvents.TICKET_REASSIGNED,
  ],
}
