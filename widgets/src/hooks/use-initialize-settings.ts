import { useEffect, useLayoutEffect, useMemo } from 'preact/hooks'

import { useTranslation } from '../localization'
import { Script } from '../services/script'
import { useSettings } from './use-settings'

export const useInitializeSettings = () => {
  const { changeLanguage } = useTranslation()
  const { setSettings, locale } = useSettings()
  const { url: organizationURL, widgetId } = useMemo(
    () => Script.getDataFromScript(),
    []
  )

  useLayoutEffect(() => {
    setSettings({
      ...window?.$tlySettings,
      widget: { id: widgetId, organizationURL },
    })
  }, [])

  useEffect(() => {
    changeLanguage(locale)
  }, [locale])

  return {
    organizationURL,
    widgetId,
  }
}
