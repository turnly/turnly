import { Fragment, h } from 'preact'

import { Articles } from '../../components/articles'
import { Text, Title } from '../../components/typography'
import { useTranslation } from '../../localization'

export const HomeScreen = () => {
  const { translate } = useTranslation()

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
