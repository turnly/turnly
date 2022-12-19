/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IRealtimeHandler } from '@turnly/realtime'

import { RealtimeForCustomersHandler } from './RealtimeForCustomersHandler'
import { RealtimeForOneCustomerHandler } from './RealtimeForOneCustomerHandler'
import { RealtimeTicketCalledToDeskHandler } from './RealtimeTicketCalledToDeskHandler'

export const queuingHandlers: IRealtimeHandler[] = [
  new RealtimeForCustomersHandler(),
  new RealtimeForOneCustomerHandler(),
  new RealtimeTicketCalledToDeskHandler(),
]
