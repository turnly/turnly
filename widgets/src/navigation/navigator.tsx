import { AnimatePresence } from 'framer-motion'
import { Fragment, h } from 'preact'
import { useMemo } from 'preact/hooks'

import type { INavigatorProps } from '../@types/navigation'
import { ERROR_MESSAGES } from '../data'
import { navigatorWarnings } from './navigator-warnings'
import { useNavigator } from './use-navigator'

/**
 * Navigator Provider
 *
 * @description Provides a way for your app to transition between screens with
 * a simple implementation because it doesn't seem necessary to
 * install a larger library to manage screens.
 *
 * @author Turnly
 */
export const Navigator = ({ children }: INavigatorProps) => {
  navigatorWarnings(children) // @patch-line
  const { currentScreen } = useNavigator()

  const screen = useMemo(
    () =>
      Array.isArray(children)
        ? children.find(({ props }) => props?.name === currentScreen)
        : children,
    [children, currentScreen]
  )

  if (!screen) throw new Error(ERROR_MESSAGES.NAVIGATOR_NO_CHILDREN)

  return (
    <Fragment>
      <AnimatePresence mode="wait">{screen}</AnimatePresence>
    </Fragment>
  )
}
