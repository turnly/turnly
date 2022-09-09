import { h } from 'preact'

import { useTranslation } from '../../localization'

export const HelloScreen = () => {
  const { translate } = useTranslation()

  return <p>{translate('home.title')}</p>
}
