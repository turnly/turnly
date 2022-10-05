import { useCallback } from 'preact/hooks'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import shallow from 'zustand/shallow'

import { ServiceParams } from '../components/services'

interface InternalStore {
  selectedService?: ServiceParams
  setService: (service?: ServiceParams) => void
}

const useStore = create<InternalStore>()(
  persist(
    immer(set => ({
      service: undefined,
      setService(service?: ServiceParams) {
        set(state => {
          state['selectedService'] = service
        })
      },
    }))
  )
)

export const useInternalState = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
