import { useCallback } from 'preact/hooks'
import create from 'zustand'
import shallow from 'zustand/shallow'

type Store = {
  isLoading: boolean
  startLoading: () => void
  stopLoading: () => void
}

const useStore = create<Store>(set => ({
  isLoading: false,
  startLoading: () => set(() => ({ isLoading: true })),
  stopLoading: () => set(() => ({ isLoading: true })),
}))

export const useLoading = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
