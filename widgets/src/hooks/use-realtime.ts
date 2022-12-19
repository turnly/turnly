import { Realtime } from '@turnly/rtm'
import { useCallback, useLayoutEffect } from 'preact/hooks'
import create from 'zustand'
import shallow from 'zustand/shallow'

import { Session } from '../@types/session'
import { Nullable } from '../@types/shared'
import { getRealtime } from '../libs/realtime'
import { useBus } from '../services/event-bus'
import { useSession } from './use-session'
import { useVisibility } from './use-visibility'

export enum RealtimeEvents {
  CONNECTED = 'connected',
  CONNECT_ERROR = 'connect_error',
  SUBSCRIBE = 'subscribe',
  SERVICE_TICKETS_AHEAD = 'service.tickets.ahead',
  SERVICE_TICKETS_BEHIND = 'service.tickets.behind',
  TICKET_BEFORE_YOURS_UPDATED = 'ticket.before-yours.updated',
  TICKET_CALLED = 'ticket.called-to-desk',
}

type Store = {
  realtime: Nullable<Realtime>
  setRealtime: (realtime: Realtime) => void
}

const useStore = create<Store>(set => ({
  realtime: null,
  setRealtime: realtime => set(() => ({ realtime })),
}))

const useRealtime = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )

const useInitializeRealtime = (organizationURL: string, widgetId: string) => {
  const $bus = useBus()
  const { setRealtime, realtime } = useRealtime()

  const { setSession, customer } = useSession()
  const { setShow, setHide } = useVisibility()

  useLayoutEffect(() => {
    const rtm = getRealtime(organizationURL, widgetId)

    if (customer.id) rtm.setQuery('customerId', customer.id)

    const unconnected = rtm.subscribe<Session>(
      RealtimeEvents.CONNECTED,
      data => {
        setRealtime(rtm)
        setSession(data.payload)
        setShow()

        $bus.ready.dispatch()
      }
    )

    const unsubError = rtm.subscribe(RealtimeEvents.CONNECT_ERROR, setHide)

    return () => {
      unconnected()
      unsubError()
    }
  }, [])

  return {
    realtime,
  }
}

export { useInitializeRealtime, useRealtime }
