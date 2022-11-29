/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { AbstractRealtimeHandler, IRealtimeChannel } from '@turnly/realtime'
import { Event, EventPayload, EventType } from '@turnly/shared'
import { BroadcastableEvents } from 'broadcasting/broadcastableEvents'
import { RealtimeEvents } from 'broadcasting/realtimeEvents'

interface Payload extends EventPayload {
  serviceId: Guid
  customerId: Guid
  locationId: Guid
  ticketId: Guid
  serviceName: string
}

export class RealtimeForAgentsTicketsHandler extends AbstractRealtimeHandler<
  Event<Payload>
> {
  public constructor() {
    super(RealtimeForAgentsTicketsHandler.getEvents())
  }

  public handle(event: Event<Payload>, channel: IRealtimeChannel): void {
    const payload: Payload = {
      ticketId: event.payload.ticketId,
      locationId: event.payload.locationId,
      serviceId: event.payload.serviceId,
      customerId: event.payload.customerId,
      serviceName: event.payload.serviceName,
      organizationId: event.payload.organizationId,
    }

    channel.to(payload.locationId).emit(
      RealtimeEvents.AGENTS_TICKETS_UPDATES,
      Event.fromObject({
        type: EventType.INFO,
        name: RealtimeEvents.AGENTS_TICKETS_UPDATES,
        payload,
      })
    )
  }

  private static getEvents(): BroadcastableEvents[] {
    return [BroadcastableEvents.TICKET_ANNOUNCED]
  }
}
