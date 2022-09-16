import { useCallback } from 'preact/hooks'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import shallow from 'zustand/shallow'

import { Settings } from '../@types/settings'
import { Cookies } from '../libs/cookies'

interface SettingsStore extends Settings {
  setSettings: (value: Partial<Settings>) => void
}

const useStore = create<SettingsStore>()(
  persist(
    immer(set => ({
      locale: '',
      appearance: {
        zIndex: 1,
        primary: '',
        secondary: '',
        color: '',
        position: 'left',
        design: 'flat',
        box: {
          color: '',
          background: '',
        },
        launcher: {
          color: '',
          background: '',
        },
      },
      disableTelemetry: false,
      widget: {
        id: '',
        organizationURL: '',
      },
      setSettings(values) {
        set((state: Settings) => {
          for (const key in values) {
            if (Object.prototype.hasOwnProperty.call(state, key)) {
              state[key] = values[key]
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

export const useSettings = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
