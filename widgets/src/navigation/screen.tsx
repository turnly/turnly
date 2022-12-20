import { motion as Animated } from 'framer-motion'
import { Fragment, FunctionalComponent, h } from 'preact'
import { useCallback, useLayoutEffect } from 'preact/hooks'
import { IoArrowBack } from 'react-icons/io5'

import type { TScreenProps } from '../@types/navigation'
import { useSession } from '../hooks/use-session'
import { useTitle } from '../hooks/use-title'
import { SCREEN_NAMES } from './screen-names'
import { useNavigator } from './use-navigator'

/**
 * Navigator Screen
 *
 * @description Empty component used for specifying route configuration.
 *
 * @author Turnly
 */
export const Screen: FunctionalComponent<TScreenProps> = ({
  component: Component,
  title,
  backScreen,
  ...props
}: TScreenProps) => {
  const { navigate } = useNavigator()
  const { setTitle } = useTitle()
  const { widget } = useSession()

  const onBack = useCallback(
    () => backScreen && navigate(backScreen as SCREEN_NAMES),
    [backScreen]
  )

  useLayoutEffect(() => {
    setTitle(props.name === SCREEN_NAMES.HOME ? widget.name : title)
  }, [title, widget.name])

  return (
    <Fragment>
      {backScreen && (
        <div className="tly-screen-side-back">
          <button className="tly-screen-side-back-btn" onClick={onBack}>
            <IoArrowBack color="var(--tly-default-text-color)" size={24} />
          </button>
        </div>
      )}

      <Animated.div
        {...props}
        key={props.name}
        initial={{
          opacity: 0,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          flexGrow: 1,
        }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Component />
      </Animated.div>
    </Fragment>
  )
}
