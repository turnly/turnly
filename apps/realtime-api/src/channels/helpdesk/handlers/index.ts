/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IRealtimeHandler } from '@turnly/realtime'

import { RealtimeForAgentsTicketsHandler } from './RealtimeForAgentsTicketsHandler'

export const helpdeskHandlers: IRealtimeHandler[] = [
  new RealtimeForAgentsTicketsHandler(),
]
