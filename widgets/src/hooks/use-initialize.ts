import { useInitializeRealtime } from './use-realtime'
import { useInitializeSettings } from './use-settings'
import { useStyleVariables } from './use-style-variables'

export const useInitialize = () => {
  useStyleVariables()

  const { organizationURL, widgetId } = useInitializeSettings()

  useInitializeRealtime(organizationURL, widgetId)
}
