import { useCallback, useEffect, useLayoutEffect, useMemo } from 'preact/hooks'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import shallow from 'zustand/shallow'

import { About, Appearance, General, Settings } from '../@types/settings'
import { Cookies } from '../libs/cookies'
import { useTranslation } from '../localization'
import { Script } from '../services/script'

interface SettingsStore extends Settings {
  setGeneral: (values: Partial<General>) => void
  setAppearance: (values: Partial<Appearance>) => void
  setAbout: (values: Partial<About>) => void
}

export const mergeSettings = <T extends Record<string, any>>(
  settings: Settings,
  property: string,
  toMerge: T
) => {
  for (const key in toMerge) {
    const isKeyOf = Boolean(
      Object.prototype.hasOwnProperty.call(settings[property], key)
    )

    if (isKeyOf)
      settings[property][key] =
        typeof toMerge[key] === 'object'
          ? { ...settings[property][key], ...toMerge[key] }
          : toMerge[key]
  }
}

const useStore = create<SettingsStore>()(
  persist(
    immer(set => ({
      appearance: {
        zIndex: 999999,
        position: 'right',
        design: 'rounded',
        primary: {
          color: '',
          background: '',
        },
        secondary: {
          color: '',
          background: '',
        },
      },
      general: {
        locale: '',
        country: '',
        disableTelemetry: false,
      },
      about: {
        widgetId: '',
        organizationURL: '',
      },
      setGeneral(values) {
        set((settings: Settings) => mergeSettings(settings, 'general', values))
      },
      setAppearance(values) {
        set((settings: Settings) =>
          mergeSettings(settings, 'appearance', values)
        )
      },
      setAbout(values) {
        set((settings: Settings) => mergeSettings(settings, 'about', values))
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
  const { setAbout, setAppearance, setGeneral, general } = useSettings()
  const settings = useMemo(
    () => ({
      ...window?.turnlySettings,
      about: {
        ...window?.turnlySettings?.about,
        ...Script.getDataFromScript(),
      },
    }),
    []
  )

  useLayoutEffect(() => {
    setAbout(settings.about)

    if (settings.appearance) setAppearance(settings.appearance)
    if (settings.general) setGeneral(settings.general)
  }, [])

  useEffect(() => {
    changeLanguage(general.locale)
  }, [general.locale])

  return settings
}

export { useInitializeSettings, useSettings }
