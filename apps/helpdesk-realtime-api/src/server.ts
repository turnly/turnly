/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Realtime } from '@turnly/realtime'

import { AuthGuard } from './auth.guard'
import { RealtimeForTicketsChangesHandler } from './event-handlers/realtime-for-tickets-changes.handler'
import { Channels, serverOptions } from './server.config'

const server = new Realtime(serverOptions)

const channel = server.listen(Channels.HELPDESK)

/**
 * Middlewares
 *
 * @description Middlewares are executed before the event handlers.
 */
channel.use(new AuthGuard().use())

/**
 * Event handlers
 *
 * @description Event handlers are used to notify the clients about the events.
 */
channel.subscribe([new RealtimeForTicketsChangesHandler()])

export { server }
