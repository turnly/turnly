import { Fragment, h } from 'preact'
import { AiOutlineCheck } from 'react-icons/ai'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Location } from '../../components/location'
import { Order } from '../../components/order'
import { Transaction } from '../../components/transaction'
import { Text, Title } from '../../components/typography'
import { useTranslation } from '../../localization'

export const TicketDetailsScreen = () => {
  const { translate } = useTranslation()

  return (
    <Fragment>
      <div className="tly-home">
        <HeaderScreen>
          <Location
            title="Office space rentals"
            description="963 W. Belmont Ave. Chicago, IL 608…"
            iconRight={<AiOutlineCheck color="#02543F" size={22} />}
            isPrimary
          />

          <Transaction
            idTransaction="a074"
            typeTransaction="cash transaction"
          />

          <Order numberOrder="08" isPrimary />
        </HeaderScreen>

        <FooterScreen>
          <div>
            <Title hasGaps={false}>{translate('tickets.announce.title')}</Title>
            <Text hasGaps={false}>
              {translate('tickets.announce.description')}
            </Text>
          </div>

          <div className="tly-ticket-details-buttons">
            <Button isOutline isSecondary>
              {translate('tickets.leave.button_text')}
            </Button>
            <Button>{translate('tickets.announce.button_text')}</Button>
          </div>
        </FooterScreen>
      </div>
    </Fragment>
  )
}
