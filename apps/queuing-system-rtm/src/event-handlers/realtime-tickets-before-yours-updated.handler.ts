/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { Event, EventPayload, EventType } from '@turnly/core'
import { AbstractRealtimeHandler, IRealtimeChannel } from '@turnly/realtime'
import { BroadcastableEvents } from 'constants/broadcastable-events.enum'

import { RealtimeEventsForQueuing } from '../constants/realtime-events-for-queuing.enum'

interface Payload extends EventPayload {
  serviceId: Guid
  customerId: Guid
  locationId: Guid
}

export class RealtimeTicketsBeforeYoursUpdatedHandler extends AbstractRealtimeHandler<
  Event<Payload>
> {
  public constructor() {
    super(RealtimeTicketsBeforeYoursUpdatedHandler.getEvents())
  }

  public handle(
    { payload: { locationId, serviceId, organizationId, id } }: Event<Payload>,
    channel: IRealtimeChannel
  ): void {
    const roomId = `${locationId}.${serviceId}`
    const payload = { locationId, serviceId, organizationId, ticketId: id }

    channel.to(roomId).emit(
      RealtimeEventsForQueuing.TICKETS_BEFORE_YOURS,
      Event.fromObject({
        type: EventType.INFO,
        name: RealtimeEventsForQueuing.TICKETS_BEFORE_YOURS,
        payload,
      })
    )
  }

  public static getEvents(): BroadcastableEvents[] {
    return [
      BroadcastableEvents.TICKET_COMPLETED,
      BroadcastableEvents.TICKET_CANCELLED,
      BroadcastableEvents.TICKET_DISCARDED,
    ]
  }
}
