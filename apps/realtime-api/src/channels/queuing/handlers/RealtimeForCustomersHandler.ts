/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { AbstractRealtimeHandler, IRealtimeChannel } from '@turnly/realtime'
import { Event, EventPayload } from '@turnly/shared'
import { BroadcastableEvents } from 'broadcasting/broadcastableEvents'
import { RealtimeEvents } from 'broadcasting/realtimeEvents'

interface Payload extends EventPayload {
  serviceId: Guid
  customerId: Guid
  locationId: Guid
}

export class RealtimeForCustomersHandler extends AbstractRealtimeHandler<
  Event<Payload>
> {
  public constructor() {
    super(RealtimeForCustomersHandler.getEvents())
  }

  public handle(event: Event<Payload>, channel: IRealtimeChannel): void {
    const message =
      event.getName() === BroadcastableEvents.TICKET_CREATED
        ? RealtimeEvents.SERVICE_TICKETS_AHEAD
        : RealtimeEvents.SERVICE_TICKETS_BEHIND

    const payload = {
      locationId: event.payload.locationId,
      serviceId: event.payload.serviceId,
    }

    channel.to(payload.locationId).emit(message, payload)
  }

  private static getEvents(): BroadcastableEvents[] {
    return [
      BroadcastableEvents.TICKET_CREATED,
      BroadcastableEvents.TICKET_COMPLETED,
      BroadcastableEvents.TICKET_CANCELLED,
    ]
  }
}
