import { Fragment, h } from 'preact'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Services } from '../../components/services'
import { Title } from '../../components/typography'
import { useCurrentLocation } from '../../hooks/use-current-location'
import { useInternalState } from '../../hooks/use-internal-state'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const ServicesScreen = () => {
  const { navigate } = useNavigator()
  const { translate } = useTranslation()
  const { id: locationId } = useCurrentLocation()
  const { service } = useInternalState()

  return (
    <Fragment>
      <div className="tly-services-main">
        <HeaderScreen />

        <div className="tly-services-content">
          <Title level={5} isGray isFontMedium>
            {translate('services.labels.hint')}
          </Title>

          <Services locationId={locationId} />
        </div>
      </div>

      <FooterScreen>
        <div className="tly-ticket-details-buttons">
          <Button
            onClick={() => navigate(SCREEN_NAMES.TAKE_TICKET)}
            disabled={!service}
          >
            {translate('continue')}
          </Button>
        </div>
      </FooterScreen>
    </Fragment>
  )
}
