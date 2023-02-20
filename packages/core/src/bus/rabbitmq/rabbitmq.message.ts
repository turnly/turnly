/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { Guid } from '@turnly/common'

import { EventType } from '../../constants/event-type.enum'
import { EventPayload } from '../../contracts/events/base.event'

export type RabbitMQMessage<P extends EventPayload = EventPayload> = {
  type: string
  id: Guid
  eventType: EventType
  payload: P
  timestamp: number
}
