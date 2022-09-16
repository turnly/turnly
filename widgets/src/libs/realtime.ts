import { Realtime } from '@turnly/rtm'

export const getRealtime = (url: string, widgetId: string) =>
  new Realtime({ url, channel: 'queuing' }).setQuery('widgetId', widgetId)
