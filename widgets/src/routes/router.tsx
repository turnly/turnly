import { h } from 'preact'

import { Navigator, Screen, SCREEN_NAMES } from '../navigation'
import { HelloScreen } from '../screens/hello'

export const Router = () => (
  <Navigator initialScreen={SCREEN_NAMES.HOME}>
    <Screen name={SCREEN_NAMES.HOME} component={HelloScreen} />
  </Navigator>
)
