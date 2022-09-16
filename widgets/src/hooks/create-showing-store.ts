import create from 'zustand'

type Store = {
  isShowing: boolean
  setShow: () => void
  setHide: () => void
}

export const createShowingStore = () =>
  create<Store>(set => ({
    isShowing: false,
    setShow: () => set(() => ({ isShowing: true })),
    setHide: () => set(() => ({ isShowing: false })),
  }))
