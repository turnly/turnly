import { useCallback } from 'preact/hooks'
import create from 'zustand'
import shallow from 'zustand/shallow'

import { SCREEN_NAMES } from './screen-names'

interface NavigatorState {
  currentScreen: SCREEN_NAMES
  navigate: (screen: SCREEN_NAMES) => void
}

const useStore = create<NavigatorState>(set => ({
  currentScreen: SCREEN_NAMES.HOME,
  navigate: screen => set(() => ({ currentScreen: screen })),
}))

export const useNavigator = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
