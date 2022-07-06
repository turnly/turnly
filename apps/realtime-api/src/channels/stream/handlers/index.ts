/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IRealtimeHandler } from '@turnly/realtime'

import { StreamingDataToOrganization } from './StreamingDataToOrganization'

export const streamHandlers: IRealtimeHandler[] = [
  new StreamingDataToOrganization(),
]
