import { useCallback } from 'preact/hooks'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import shallow from 'zustand/shallow'

import { LocationParams } from '../components/locations'
import { Cookies } from '../libs/cookies'

interface LocationStore extends LocationParams {
  setCurrentLocation: (values: Partial<LocationParams>) => void
}

const useStore = create<LocationStore>()(
  persist(
    immer(set => ({
      id: '',
      name: '',
      address: '',
      country: '',
      longitude: '',
      latitude: '',
      setCurrentLocation(values) {
        set((state: LocationParams) => {
          for (const key in values) {
            if (Object.prototype.hasOwnProperty.call(state, key)) {
              state[key] = values[key]
            }
          }
        })
      },
    })),
    {
      name: 'tly.locations.current',
      version: 1,
      getStorage: () => Cookies,
    }
  )
)

export const useCurrentLocation = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
