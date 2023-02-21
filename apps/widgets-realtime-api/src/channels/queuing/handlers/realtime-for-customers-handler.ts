/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { AbstractRealtimeHandler, IRealtimeChannel } from '@turnly/realtime'
import { Event, EventType } from '@turnly/shared'
import { BroadcastableEvents } from 'broadcasting/broadcastable-events'

import { RealtimeEventsForQueuing } from '../events/realtime-events-for-queuing'

export class RealtimeForCustomersHandler extends AbstractRealtimeHandler {
  public constructor() {
    super(RealtimeForCustomersHandler.getEvents())
  }

  public handle(event: Event, channel: IRealtimeChannel): void {
    const name =
      event.getName() === BroadcastableEvents.TICKET_CREATED
        ? RealtimeEventsForQueuing.SERVICE_TICKETS_AHEAD
        : RealtimeEventsForQueuing.SERVICE_TICKETS_BEHIND

    channel.to(event.payload.locationId).emit(
      name,
      Event.fromObject({
        type: EventType.INFO,
        name,
        payload: {
          locationId: event.payload.locationId,
          serviceId: event.payload.serviceId,
          organizationId: event.payload.organizationId,
        },
      })
    )
  }

  private static getEvents(): BroadcastableEvents[] {
    return [
      BroadcastableEvents.TICKET_CREATED,
      BroadcastableEvents.TICKET_COMPLETED,
      BroadcastableEvents.TICKET_CANCELLED,
    ]
  }
}
