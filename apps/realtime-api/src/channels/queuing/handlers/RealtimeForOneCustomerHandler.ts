/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
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

export class RealtimeForOneCustomerHandler extends AbstractRealtimeHandler<
  Event<Payload>
> {
  public constructor() {
    super(RealtimeForOneCustomerHandler.getEvents())
  }

  public handle(
    { payload: { locationId, serviceId } }: Event<Payload>,
    channel: IRealtimeChannel
  ): void {
    const roomId = `${locationId}.${serviceId}`
    const payload = { locationId, serviceId }

    channel.to(roomId).emit(RealtimeEvents.TICKET_BEFORE_YOURS_UPDATED, payload)
  }

  public static getEvents(): BroadcastableEvents[] {
    return [
      BroadcastableEvents.TICKET_COMPLETED,
      BroadcastableEvents.TICKET_CANCELLED,
    ]
  }
}
