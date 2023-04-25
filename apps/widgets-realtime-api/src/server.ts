/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Realtime } from '@turnly/realtime'
import { AuthGuard } from 'auth.guard'

import { RealtimeForCustomersHandler } from './event-handlers/realtime-for-customers.handler'
import { RealtimeTicketCalledToDeskHandler } from './event-handlers/realtime-ticket-called-to-desk.handler'
import { RealtimeTicketCancelledHandler } from './event-handlers/realtime-ticket-cancelled.handler'
import { RealtimeTicketsBeforeYoursUpdatedHandler } from './event-handlers/realtime-tickets-before-yours-updated.handler'
import { Channels, serverOptions } from './server.config'

const server = new Realtime(serverOptions)

server
  .listen(Channels.QUEUING)
  .use(new AuthGuard().use())
  .subscribe([
    new RealtimeForCustomersHandler(),
    new RealtimeTicketsBeforeYoursUpdatedHandler(),
    new RealtimeTicketCalledToDeskHandler(),
    new RealtimeTicketCancelledHandler(),
  ])

export { server }
