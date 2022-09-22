import { useInitializeRealtime } from './use-realtime'
import { useInitializeSettings } from './use-settings'

export const useInitialize = () => {
  const { about } = useInitializeSettings()

  useInitializeRealtime(about.organizationURL, about.widgetId)
}
