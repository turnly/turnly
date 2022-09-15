import { Fragment, h } from 'preact'

import { useTranslation } from '../../localization'

export const LocationsScreen = () => {
  const { translate } = useTranslation()

  return (
    <Fragment>
      <h3>{translate('locations.title')}</h3>
      <p>{translate('locations.description')}</p>
    </Fragment>
  )
}
