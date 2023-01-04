import { Realtime } from '@turnly/rtm'

export const getRealtime = (url: string, widgetId: string) =>
  new Realtime.Widgets({ url }).setQuery('widgetId', widgetId)

export type RealtimeClient = ReturnType<typeof getRealtime>
