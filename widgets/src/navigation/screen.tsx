import { Fragment, FunctionalComponent, h } from 'preact'
import { useLayoutEffect } from 'preact/hooks'

import type { TScreenProps } from '../@types/navigation'
import { useTitle } from '../hooks/use-title'

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

  useLayoutEffect(() => {
    setTitle(title)
  }, [title])

  return (
    <Fragment {...props}>
      <Component />
    </Fragment>
  )
}
