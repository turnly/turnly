import { useCallback } from 'preact/hooks'
import create from 'zustand'
import shallow from 'zustand/shallow'

type Store = {
  title: string
  setTitle: (title: string) => void
  reset: () => void
}

const useStore = create<Store>(set => ({
  title: '',
  setTitle: title => set(() => ({ title })),
  reset: () => set(() => ({ title: '' })),
}))

export const useTitle = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
