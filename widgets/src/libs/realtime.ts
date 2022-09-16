import { Realtime } from '@turnly/rtm'

export const realtime = new Realtime({
  url: 'http://localhost',
  channel: 'queuing',
}).setQuery('widgetId', 'int_UzUldqvxRo3LOQGn-Rzyq')
