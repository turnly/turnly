import { useMemo } from 'preact/compat'

import { useSession } from './use-session'
import { useShowWidget } from './use-show-widget'

export const useNotification = () => {
  const isCompatible = useMemo(() => 'Notification' in window, [])
  const { widget } = useSession()

  const { isShowing } = useShowWidget()

  return {
    initNotification: () => isCompatible && Notification.requestPermission(),
    showNotification: (description: string) => {
      if (!isCompatible) return

      if (!isShowing || document.visibilityState === 'hidden') {
        new Notification(widget.name, { body: description })
      }
    },
    isNotificationAllowed: () =>
      isCompatible && ['granted', 'denied'].includes(Notification.permission),
  }
}
