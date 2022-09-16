import { useCallback } from 'preact/hooks'
import shallow from 'zustand/shallow'

import { createShowingStore } from './create-showing-store'

const useShowing = createShowingStore()

export const useShowWidget = () =>
  useShowing(
    useCallback(s => s, []),
    shallow
  )
