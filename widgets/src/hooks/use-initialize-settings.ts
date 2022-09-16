import { useEffect, useLayoutEffect } from 'preact/hooks'

import { useTranslation } from '../localization'
import { useSettings } from './use-settings'

export const useInitializeSettings = () => {
  const { changeLanguage } = useTranslation()
  const { setSettings, locale } = useSettings()

  useLayoutEffect(() => {
    if (window.$tlySettings) setSettings(window.$tlySettings)
  }, [])

  useEffect(() => {
    changeLanguage(locale)
  }, [locale])
}
