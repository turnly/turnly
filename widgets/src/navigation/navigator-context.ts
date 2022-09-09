import { createContext } from 'preact'

import type { TNavigatorContext } from '../@types/navigation'
import { ERROR_MESSAGES } from '../data'

export const NavigatorContext = createContext<TNavigatorContext>({
  currentScreen: undefined,
  navigate() {
    throw new Error(ERROR_MESSAGES.NAVIGATE_NOT_IMPLEMENTED)
  },
})
