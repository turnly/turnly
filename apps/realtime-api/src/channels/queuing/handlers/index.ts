/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IRealtimeHandler } from '@turnly/realtime'

import { RealtimeForCustomersHandler } from './RealtimeForCustomersHandler'
import { RealtimeForOneCustomerHandler } from './RealtimeForOneCustomerHandler'

export const queuingHandlers: IRealtimeHandler[] = [
  new RealtimeForCustomersHandler(),
  new RealtimeForOneCustomerHandler(),
]
