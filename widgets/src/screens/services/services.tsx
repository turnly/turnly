import { Fragment, h } from 'preact'

import { Button } from '../../components/button'
import { CurrentLocation } from '../../components/current-location'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Services } from '../../components/services'
import { Title } from '../../components/typography'
import { useTranslation } from '../../localization'

export const ServicesScreen = () => {
  const { translate } = useTranslation()

  return (
    <Fragment>
      <div className="tly-home">
        <HeaderScreen>
          <CurrentLocation
            title="Office space rentals"
            description="963 W. Belmont Ave. Chicago IL 608"
          />
        </HeaderScreen>

        <div className="tly-services-content">
          <Title level={4}>{translate('services.labels.hint')}</Title>

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
            <Button>{translate('continue')}</Button>
          </div>
        </FooterScreen>
      </div>
    </Fragment>
  )
}
