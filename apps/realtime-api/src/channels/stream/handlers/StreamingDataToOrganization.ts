/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Logger } from '@turnly/common'
import { AbstractRealtimeHandler, IRealtimeChannel } from '@turnly/realtime'
import { Event } from '@turnly/shared'

export class StreamingDataToOrganization extends AbstractRealtimeHandler<Event> {
  public handle(event: Event, channel: IRealtimeChannel): void {
    Logger.verbose('Streaming data to organization ...', {
      event: event.getName(),
      organizationId: event.payload.organizationId,
    })

    channel.to(event.payload.organizationId).emit(event.getName(), event)
  }
}
