import { useCallback } from 'preact/hooks'
import create from 'zustand'
import shallow from 'zustand/shallow'

type Store = {
  isLoading: boolean
  setLoading: (isLoading: boolean) => void
}

const useStore = create<Store>(set => ({
  isLoading: false,
  setLoading: isLoading => set(() => ({ isLoading })),
}))

export const useLoading = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
