/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { AbstractRealtimeHandler, IRealtimeChannel } from '@turnly/realtime'
import { Event, EventPayload, EventType } from '@turnly/shared'
import { BroadcastableEvents } from 'broadcasting/broadcastable-events'

import { RealtimeEventsForQueuing } from '../events/realtime-events-for-queuing'

interface Payload extends EventPayload {
  id: Guid
  customerId: Guid
  status: string
}

export class RealtimeTicketCancelledHandler extends AbstractRealtimeHandler<
  Event<Payload>
> {
  public constructor() {
    super(RealtimeTicketCancelledHandler.getEvents())
  }

  public handle(
    {
      payload: { customerId, id: ticketId, organizationId, status },
    }: Event<Payload>,
    channel: IRealtimeChannel
  ): void {
    channel.to(customerId).emit(
      RealtimeEventsForQueuing.TICKET_CANCELLED,
      Event.fromObject({
        type: EventType.INFO,
        name: RealtimeEventsForQueuing.TICKET_CANCELLED,
        payload: {
          ticketId,
          status,
          organizationId,
        },
      })
    )
  }

  public static getEvents(): BroadcastableEvents[] {
    return [
      BroadcastableEvents.TICKET_COMPLETED,
      BroadcastableEvents.TICKET_CANCELLED,
      BroadcastableEvents.TICKET_RETURNED,
      BroadcastableEvents.TICKET_DISCARDED,
    ]
  }
}
