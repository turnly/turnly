import { Fragment, h } from 'preact'
import { AiFillCheckCircle } from 'react-icons/ai'

import { Input } from '../../components/form'
import { Text, Title } from '../../components/typography'
import { useTranslation } from '../../localization'

export const LocationsScreen = () => {
  const { translate } = useTranslation()

  return (
    <Fragment>
      <div className="tly-home">
        <Title>{translate('locations.title')}</Title>
        <Text>{translate('locations.description')}</Text>

        <Input isIcon={true} iconRight={<AiFillCheckCircle />} />
      </div>
    </Fragment>
  )
}
