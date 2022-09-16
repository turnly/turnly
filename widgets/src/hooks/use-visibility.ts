import { useCallback } from 'preact/hooks'
import shallow from 'zustand/shallow'

import { $bus } from '../services/event-bus'
import { createShowingStore } from './create-showing-store'

const useShowing = createShowingStore()

export const useVisibility = () => {
  const {
    isShowing,
    setHide: setHideFn,
    setShow: setShowFn,
  } = useShowing(
    useCallback(s => s, []),
    shallow
  )

  const setShow = useCallback(() => {
    setShowFn()

    $bus.visibility.dispatch({ isVisible: false })
  }, [])

  const setHide = useCallback(() => {
    setHideFn()

    $bus.visibility.dispatch({ isVisible: true })
  }, [])

  return {
    setHide,
    setShow,
    isShowing,
  }
}
