import { Realtime } from '@turnly/rtm'
import { useCallback } from 'preact/hooks'
import create from 'zustand'
import shallow from 'zustand/shallow'

import { Nullable } from '../@types/shared'

type Store = {
  realtime: Nullable<Realtime>
  setRealtime: (realtime: Realtime) => void
}

const useStore = create<Store>(set => ({
  realtime: null,
  setRealtime: realtime => set(() => ({ realtime })),
}))

export const useRealtime = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
