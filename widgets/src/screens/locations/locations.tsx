import { Fragment, h } from 'preact'

import { Text, Title } from '../../components/typography'
import { useTranslation } from '../../localization'

export const LocationsScreen = () => {
  const { translate } = useTranslation()

  return (
    <Fragment>
      <Title>{translate('locations.title')}</Title>
      <Text>{translate('locations.description')}</Text>
    </Fragment>
  )
}
