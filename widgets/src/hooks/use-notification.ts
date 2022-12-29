import { useMemo } from 'preact/compat'

export const useNotification = () => {
  const isCompatible = useMemo(() => 'Notification' in window, [])

  return {
    initNotification: () => isCompatible && Notification.requestPermission(),
    showNotification: (description: string) => {
      isCompatible &&
        document.visibilityState === 'hidden' &&
        new Notification('Turnly', { body: description })
    },
    isNotificationAllowed: () =>
      isCompatible && ['granted', 'denied'].includes(Notification.permission),
  }
}
