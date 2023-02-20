/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Realtime } from '@turnly/realtime'
import { queuingHandlers } from 'channels/queuing/handlers'
import { AllowConnGuard } from 'channels/queuing/middlewares/allow-conn.guard'

import { Channels, serverOptions } from './shared/config'

const server = new Realtime(serverOptions)

server
  .listen(Channels.QUEUING)
  .use(new AllowConnGuard().use())
  .subscribe(queuingHandlers)

export { server }
