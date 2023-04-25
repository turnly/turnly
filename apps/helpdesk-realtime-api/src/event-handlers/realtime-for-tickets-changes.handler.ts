/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { AbstractRealtimeHandler, IRealtimeChannel } from '@turnly/realtime'
import { Event, EventType } from '@turnly/shared'

import { BroadcastableEvents } from '../constants/broadcastable-events.enum'
import { RealtimeEventsForHelpdesk } from '../constants/realtime-events-for-helpdesk.enum'

export class RealtimeForTicketsChangesHandler extends AbstractRealtimeHandler {
  public constructor() {
    super(RealtimeForTicketsChangesHandler.getEvents())
  }

  public handle(event: Event, channel: IRealtimeChannel): void {
    channel.to(event.payload.locationId).emit(
      RealtimeEventsForHelpdesk.TICKETS_CHANGES,
      Event.fromObject({
        type: EventType.INFO,
        name: RealtimeEventsForHelpdesk.TICKETS_CHANGES,
        payload: event.payload,
      })
    )
  }

  private static getEvents(): BroadcastableEvents[] {
    return [
      BroadcastableEvents.TICKET_ANNOUNCED,
      BroadcastableEvents.TICKET_RETURNED,
      BroadcastableEvents.TICKET_CANCELLED,
    ]
  }
}
