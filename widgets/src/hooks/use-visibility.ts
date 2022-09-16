import { useCallback } from 'preact/hooks'
import shallow from 'zustand/shallow'

import { $bus } from '../services/event-bus'
import { createShowingStore } from './create-showing-store'

const useShowing = createShowingStore()

export const useVisibility = () => {
  const {
    isOpen,
    setClose: setCloseFn,
    setOpen: setOpenFn,
  } = useShowing(
    useCallback(s => s, []),
    shallow
  )

  const setOpen = useCallback(() => {
    setOpenFn()

    $bus.visibility.dispatch({ isVisible: false })
  }, [])

  const setClose = useCallback(() => {
    setCloseFn()

    $bus.visibility.dispatch({ isVisible: true })
  }, [])

  return {
    setClose,
    setOpen,
    isOpen,
  }
}
