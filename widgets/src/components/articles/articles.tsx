import { h } from 'preact'

import { config } from '../../config'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'
import { Article } from './article'

export const Articles = () => {
  const { translate } = useTranslation()
  const { navigate } = useNavigator()

  return (
    <div className="tly-home-articles">
      <Article
        title={translate('home.articles.take_a_ticket.title')}
        description={translate('home.articles.take_a_ticket.description')}
        buttonText={translate('home.articles.take_a_ticket.button_text')}
        buttonProps={{ onClick: () => navigate(SCREEN_NAMES.LOCATIONS) }}
      />
      <Article
        title={translate('home.articles.get_turnly.title')}
        subtitle={translate('home.sponsored')}
        description={translate('home.articles.get_turnly.description')}
        buttonText={translate('home.articles.get_turnly.button_text')}
        buttonProps={{
          isSecondary: true,
          onClick: () => window.location.replace(config.TURNLY_URL),
        }}
      />
    </div>
  )
}
