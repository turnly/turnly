import { useEffect, useLayoutEffect } from 'preact/hooks'

import { useTranslation } from '../localization'
import { Script } from '../services/script'
import { useSettings } from './use-settings'

export const useInitializeSettings = () => {
  const { changeLanguage } = useTranslation()
  const { setSettings, locale } = useSettings()

  useLayoutEffect(() => {
    const { url: organizationURL, widgetId: id } = Script.getDataFromScript()

    setSettings({ ...window?.$tlySettings, widget: { id, organizationURL } })
  }, [])

  useEffect(() => {
    changeLanguage(locale)
  }, [locale])
}
