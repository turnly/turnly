/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IRealtimeHandler } from '@turnly/realtime'

import { RealtimeForCustomersHandler } from './RealtimeForCustomersHandler'
import { RealtimeTicketCalledToDeskHandler } from './RealtimeTicketCalledToDeskHandler'
import { RealtimeTicketCancelledHandler } from './RealtimeTicketCancelledHandler'
import { RealtimeTicketsBeforeYoursUpdatedHandler } from './RealtimeTicketsBeforeYoursUpdatedHandler'

export const queuingHandlers: IRealtimeHandler[] = [
  new RealtimeForCustomersHandler(),
  new RealtimeTicketsBeforeYoursUpdatedHandler(),
  new RealtimeTicketCalledToDeskHandler(),
  new RealtimeTicketCancelledHandler(),
]
