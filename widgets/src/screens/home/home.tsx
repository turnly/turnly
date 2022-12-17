import { Fragment, h } from 'preact'
import { useEffect } from 'preact/compat'

import { Articles } from '../../components/articles'
import { Text, Title } from '../../components/typography'
import { useSearchParams } from '../../hooks/use-search-params'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const HomeScreen = () => {
  const { navigate } = useNavigator()
  const { translate } = useTranslation()
  const { ticketId } = useSearchParams()

  useEffect(() => {
    ticketId && navigate(SCREEN_NAMES.TICKET_DETAILS)
  }, [])

  return (
    <Fragment>
      <div className="tly-home">
        <Title level={1}>{translate('home.title')}</Title>
        <Text>{translate('home.description')}</Text>

        <Articles />
      </div>
    </Fragment>
  )
}
