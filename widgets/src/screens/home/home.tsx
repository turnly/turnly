import { Fragment, h } from 'preact'

import { Button } from '../../components/button'
import { Text, Title } from '../../components/text'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const HomeScreen = () => {
  const { translate } = useTranslation()
  const { navigate } = useNavigator()

  return (
    <Fragment>
      <Title>{translate('home.title')}</Title>
      <Text>{translate('home.description')}</Text>

      <Button onClick={() => navigate(SCREEN_NAMES.LOCATIONS)}>
        {translate('home.labels.button_text')}
      </Button>
    </Fragment>
  )
}
