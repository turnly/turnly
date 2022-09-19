import { useInitializeRealtime } from './use-realtime'
import { useInitializeSettings } from './use-settings'

export const useInitialize = () => {
  const { organizationURL, widgetId } = useInitializeSettings()

  useInitializeRealtime(organizationURL, widgetId)
}
