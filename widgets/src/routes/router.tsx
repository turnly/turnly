import { h } from 'preact'
import { useEffect } from 'preact/hooks'

import { useSearchParams } from '../hooks/use-search-params'
import { useShowWidget } from '../hooks/use-show-widget'
import { useTranslation } from '../localization'
import { Navigator, Screen, SCREEN_NAMES } from '../navigation'
import { HomeScreen } from '../screens/home'
import { LocationsScreen } from '../screens/locations'
import { ServicesScreen } from '../screens/services'
import { TakeTicketScreen } from '../screens/take-ticket'
import { TicketDetailsScreen } from '../screens/ticket-details'

export const Router = () => {
  const { translate } = useTranslation()
  const { ticketId } = useSearchParams()
  const { setShow } = useShowWidget()

  useEffect(() => {
    ticketId && setShow()
  }, [])

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
        backScreen={SCREEN_NAMES.HOME}
      />
      <Screen
        title={translate('fields.title')}
        name={SCREEN_NAMES.TAKE_TICKET}
        component={TakeTicketScreen}
        backScreen={SCREEN_NAMES.SERVICES}
      />
      <Screen
        title={translate('tickets.title')}
        name={SCREEN_NAMES.TICKET_DETAILS}
        component={TicketDetailsScreen}
      />
      <Screen
        title={translate('services.title')}
        name={SCREEN_NAMES.SERVICES}
        component={ServicesScreen}
        backScreen={SCREEN_NAMES.LOCATIONS}
      />
    </Navigator>
  )
}
