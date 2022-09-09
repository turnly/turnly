import { Fragment, FunctionalComponent, h } from 'preact'

import type { TScreenProps } from '../@types/navigation'

/**
 * Navigator Screen
 *
 * @description Empty component used for specifying route configuration.
 *
 * @author Turnly
 */
export const Screen: FunctionalComponent<TScreenProps> = ({
  component: Component,
  ...props
}: TScreenProps) => (
  <Fragment {...props}>
    <Component />
  </Fragment>
)
