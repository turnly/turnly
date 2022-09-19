import { useCallback, useEffect, useLayoutEffect, useMemo } from 'preact/hooks'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import shallow from 'zustand/shallow'

import { Settings } from '../@types/settings'
import { Cookies } from '../libs/cookies'
import { useTranslation } from '../localization'
import { Script } from '../services/script'

interface SettingsStore extends Settings {
  setSettings: (value: Partial<Settings>) => void
}

const useStore = create<SettingsStore>()(
  persist(
    immer(set => ({
      appearance: {
        zIndex: 1,
        position: 'right',
        design: 'flat',
        primary: {
          color: '',
          background: '',
        },
        secondary: {
          color: '',
          background: '',
        },
      },
      locale: '',
      disableTelemetry: false,
      widgetId: '',
      organizationURL: '',
      setSettings(values) {
        set((state: Settings) => {
          for (const key in values) {
            if (Object.prototype.hasOwnProperty.call(state, key)) {
              state[key] =
                typeof values[key] === 'object'
                  ? { ...state[key], ...values[key] }
                  : values[key]
            }
          }
        })
      },
    })),
    {
      name: 'tly.widget.settings',
      version: 1,
      getStorage: () => Cookies,
    }
  )
)

const useSettings = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )

const useInitializeSettings = () => {
  const { changeLanguage } = useTranslation()
  const { setSettings, locale } = useSettings()
  const customSettings = useMemo(
    () => ({
      ...window?.$tlySettings,
      ...Script.getDataFromScript(),
    }),
    []
  )

  useLayoutEffect(() => {
    setSettings(customSettings)
  }, [])

  useEffect(() => {
    changeLanguage(locale)
  }, [locale])

  return customSettings
}

export { useInitializeSettings, useSettings }
