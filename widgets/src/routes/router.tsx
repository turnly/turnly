import { h } from 'preact'

import { Navigator, Screen, SCREEN_NAMES } from '../navigation'
import { HomeScreen } from '../screens/home'
import { LocationsScreen } from '../screens/locations'

export const Router = () => (
  <Navigator initialScreen={SCREEN_NAMES.HOME}>
    <Screen name={SCREEN_NAMES.HOME} component={HomeScreen} />
    <Screen name={SCREEN_NAMES.LOCATIONS} component={LocationsScreen} />
  </Navigator>
)
