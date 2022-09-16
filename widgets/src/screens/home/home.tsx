import { Fragment, h } from 'preact'

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

      <button
        onClick={() => navigate(SCREEN_NAMES.LOCATIONS)}
        type="button"
        className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {translate('home.labels.button_text')}
      </button>
    </Fragment>
  )
}
