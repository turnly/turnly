import { IRealtimeHandler } from '@turnly/realtime'

import { StreamingDataToOrganization } from './StreamingDataToOrganization'

export const streamHandlers: IRealtimeHandler[] = [
  new StreamingDataToOrganization(),
]
