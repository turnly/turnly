import { useLayoutEffect } from 'preact/hooks'

import { Session } from '../@types/session'
import { getRealtime } from '../libs/realtime'
import { useInitializeSettings } from './use-initialize-settings'
import { useRealtime } from './use-realtime'
import { useSession } from './use-session'
import { useVisibility } from './use-visibility'

export enum RealtimeEvents {
  CONNECTED = 'connected',
}

export const useRealtimeConnection = () => {
  const { organizationURL, widgetId } = useInitializeSettings()
  const { setRealtime, realtime } = useRealtime()

  const { setSession } = useSession()
  const { isShowing, setHide, setShow } = useVisibility()

  useLayoutEffect(() => {
    const rtm = getRealtime(organizationURL, widgetId)

    const unsub = rtm.subscribe<Session>(RealtimeEvents.CONNECTED, data => {
      setRealtime(rtm)
      setSession(data.payload)
      setShow()
    })

    return () => {
      unsub()
    }
  }, [])

  return {
    isShowing,
    setHide,
    setShow,
    realtime,
  }
}
