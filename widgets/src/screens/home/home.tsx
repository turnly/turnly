import { Fragment, h } from 'preact'

import { Button } from '../../components/button'
import { Text, Title } from '../../components/typography'
import { config } from '../../config'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const HomeScreen = () => {
  const { translate } = useTranslation()
  const { navigate } = useNavigator()

  return (
    <Fragment>
      <div className="tly-home">
        <Title level={1}>{translate('home.title')}</Title>
        <Text>Increase customer throughput and satisfaction.</Text>

        <div className="tly-home-articles">
          <div className="tly-home-articles__article">
            <div className="tly-home-articles__article-header">
              <Title level={3}>Get a Ticket</Title>
              <Text>{translate('home.description')}</Text>
            </div>

            <Button isSmall onClick={() => navigate(SCREEN_NAMES.LOCATIONS)}>
              {translate('home.labels.button_text')}
            </Button>
          </div>
          <div className="tly-home-articles__article">
            <div className="tly-home-articles__article-header">
              <Text isUpper isSmall isDisabled hasGaps>
                Sponsored
              </Text>
              <Title level={3}>You + Turnly = Top match!</Title>
              <Text>
                Provide the best customer experience for your visitors.
              </Text>
            </div>

            <Button
              isSmall
              isSecondary
              onClick={() => window.location.replace(config.TURNLY_URL)}
            >
              Get Turnly
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
