import { h } from 'preact'

import { useTranslation } from '../localization'
import { Navigator, Screen, SCREEN_NAMES } from '../navigation'
import { HomeScreen } from '../screens/home'
import { LocationsScreen } from '../screens/locations'
import { TakeTicketScreen } from '../screens/take-ticket'
import { TicketDetailsScreen } from '../screens/ticket-details'

export const Router = () => {
  const { translate } = useTranslation()
  return (
    <Navigator initialScreen={SCREEN_NAMES.HOME}>
      <Screen
        title={translate('home.title')}
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
      />
      <Screen
        title={translate('locations.title')}
        name={SCREEN_NAMES.LOCATIONS}
        component={LocationsScreen}
      />
      <Screen
        title={translate('fields.title')}
        name={SCREEN_NAMES.TAKE_TICKET}
        component={TakeTicketScreen}
      />
      <Screen
        title={translate('tickets.title')}
        name={SCREEN_NAMES.TICKET_DETAILS}
        component={TicketDetailsScreen}
      />
    </Navigator>
  )
}
