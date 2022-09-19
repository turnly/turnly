import { Fragment, FunctionalComponent, h } from 'preact'
import { useLayoutEffect } from 'preact/hooks'

import type { TScreenProps } from '../@types/navigation'
import { useSession } from '../hooks/use-session'
import { useTitle } from '../hooks/use-title'
import { SCREEN_NAMES } from './screen-names'

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
  ...props
}: TScreenProps) => {
  const { setTitle } = useTitle()
  const { widget } = useSession()

  useLayoutEffect(() => {
    setTitle(props.name === SCREEN_NAMES.HOME ? widget.name : title)
  }, [title, widget.name])

  return (
    <Fragment {...props}>
      <Component />
    </Fragment>
  )
}
