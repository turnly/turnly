import { Fragment, h } from 'preact'
import { useEffect } from 'preact/hooks'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Notifier } from '../../components/notification'
import { Services } from '../../components/services'
import { Title } from '../../components/typography'
import { useCurrentLocation } from '../../hooks/use-current-location'
import { RealtimeEvents, useRealtime } from '../../hooks/use-realtime'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const ServicesScreen = () => {
  const { navigate } = useNavigator()
  const { translate } = useTranslation()
  const { realtime } = useRealtime()
  const { id: roomChannel } = useCurrentLocation()

  useEffect(() => {
    if (!realtime) return

    realtime.notify(RealtimeEvents.SUBSCRIBE, { roomChannel })

    const unsub = realtime.subscribe<{
      locationId: string
      serviceId: string
    }>(
      [
        RealtimeEvents.SERVICE_TICKETS_AHEAD,
        RealtimeEvents.SERVICE_TICKETS_BEHIND,
      ],
      event => {
        /**
         * @todo Update services list with the realtime data
         */
        Notifier.info(
          `NEW EVENT: ${event.name}, SERVICE_ID: ${event.payload.serviceId}`
        )
      }
    )

    return () => {
      unsub()
    }
  }, [])

  return (
    <Fragment>
      <div className="tly-home">
        <HeaderScreen />

        <div className="tly-services-content">
          <Title level={5} isGray isFontMedium>
            {translate('services.labels.hint')}
          </Title>

          <Services
            services={[
              {
                title: 'Custom service',
                tickets: 2,
                status: translate('services.labels.tickets_ahead'),
                onClick: () => {},
              },
              {
                title: 'Cash transactions',
                tickets: 24,
                status: translate('services.labels.tickets_ahead'),
                onClick: () => {},
                isSuccess: true,
              },
              {
                title: 'Home loans',
                tickets: 32,
                status: translate('services.labels.unavailable'),
                onClick: () => {},
                isSuccess: false,
                disabled: true,
              },
            ]}
          />
        </div>

        <FooterScreen>
          <div className="tly-ticket-details-buttons">
            <Button onClick={() => navigate(SCREEN_NAMES.TAKE_TICKET)}>
              {translate('continue')}
            </Button>
          </div>
        </FooterScreen>
      </div>
    </Fragment>
  )
}
