import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Order } from '../../components/order'
import { Rating } from '../../components/rating'
import { ServiceParams } from '../../components/services'
import { Transaction } from '../../components/transaction'
import { Text, Title } from '../../components/typography'
import { useGetTicketQuery } from '../../graphql/hooks/use-ticket-query'
import { useCurrentLocation } from '../../hooks/use-current-location'
import { useInternalState } from '../../hooks/use-internal-state'
import { useSearchParams } from '../../hooks/use-search-params'
import { useTranslation } from '../../localization'

const MIN_TICKETS_IN_QUEUE = 8

export const TicketDetailsScreen = () => {
  const { translate } = useTranslation()
  const { params } = useSearchParams()
  const { setCurrentLocation } = useCurrentLocation()
  const { service, ticket, setService, setTicket } = useInternalState()
  const [isShowing, setIsShowing] = useState(false)

  const { isLoading } = useGetTicketQuery({
    variables: { getTicketId: params['tly-ticket-id'] },
    onCompleted: async ({ getTicket }) =>
      await Promise.all([
        setTicket({
          id: getTicket.id,
          status: getTicket.status,
          displayCode: getTicket.displayCode,
          beforeYours: getTicket.beforeYours,
          calledToDesk: getTicket.calledToDesk,
          customerId: getTicket.customerId,
        }),
        setService({ ...getTicket.service } as ServiceParams),
        setCurrentLocation({ ...getTicket.location }),
      ]),
  })

  if (isLoading) return null

  return (
    <Fragment>
      <Rating
        onCallback={(rating, experience) =>
          console.log(`${rating} - ${experience}`)
        }
        isShowing={isShowing}
      />

      <div className="tly-home">
        <HeaderScreen>
          <Transaction
            idTransaction={ticket?.displayCode}
            typeTransaction={service?.name}
          />

          <Order numberOrder={`${ticket?.beforeYours}`} />
        </HeaderScreen>

        <FooterScreen>
          <div>
            <Title>{translate('tickets.booked.title')}</Title>
            <Text hasGaps={false}>
              {translate('tickets.booked.description')}
            </Text>
          </div>

          <div className="tly-ticket-details-buttons">
            <Button isOutline isSecondary onClick={() => setIsShowing(p => !p)}>
              {translate('tickets.leave.button_text')}
            </Button>

            {ticket?.beforeYours &&
              ticket.beforeYours <= MIN_TICKETS_IN_QUEUE && (
                <Button>{translate('tickets.announce.button_text')}</Button>
              )}
          </div>
        </FooterScreen>
      </div>
    </Fragment>
  )
}
