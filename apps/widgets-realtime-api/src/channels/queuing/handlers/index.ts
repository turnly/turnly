/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IRealtimeHandler } from '@turnly/realtime'

import { RealtimeForCustomersHandler } from './realtime-for-customers-handler'
import { RealtimeTicketCalledToDeskHandler } from './realtime-ticket-called-to-desk-handler'
import { RealtimeTicketCancelledHandler } from './realtime-ticket-cancelled-handler'
import { RealtimeTicketsBeforeYoursUpdatedHandler } from './realtime-tickets-before-yours-updated-handler'

export const queuingHandlers: IRealtimeHandler[] = [
  new RealtimeForCustomersHandler(),
  new RealtimeTicketsBeforeYoursUpdatedHandler(),
  new RealtimeTicketCalledToDeskHandler(),
  new RealtimeTicketCancelledHandler(),
]
