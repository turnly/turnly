import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Modal } from '../../components/modal'
import { Order } from '../../components/order'
import { ServiceParams } from '../../components/services'
import { Transaction } from '../../components/transaction'
import { Text, Title } from '../../components/typography'
import { useLeaveTicket } from '../../graphql/hooks/use-leave-ticket-mutation'
import { useGetTicketQuery } from '../../graphql/hooks/use-ticket-query'
import { useCurrentLocation } from '../../hooks/use-current-location'
import { useInternalState } from '../../hooks/use-internal-state'
import { useSearchParams } from '../../hooks/use-search-params'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

const MIN_TICKETS_IN_QUEUE = 8

export const TicketDetailsScreen = () => {
  const { translate } = useTranslation()
  const { navigate } = useNavigator()
  const { ticketId, deleteSearchParams } = useSearchParams()
  const { setCurrentLocation } = useCurrentLocation()
  const { service, ticket, setService, setTicket, setAnswers } =
    useInternalState()
  const { leaveCurrentTicket, isLoading: isLeaving } = useLeaveTicket()
  const [isShowing, setIsShowing] = useState(false)

  const { isLoading } = useGetTicketQuery({
    variables: { getTicketId: ticketId },
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

  const handleModalLeave = () => setIsShowing(p => !p)

  const handleLeaveTicket = async () => {
    if (ticket) {
      await leaveCurrentTicket(ticket.id)

      await Promise.all([
        setAnswers([]),
        setTicket(null),
        deleteSearchParams('tly-ticket-id'),
      ])

      navigate(SCREEN_NAMES.SERVICES)
    }
  }

  if (isLoading) return null

  return (
    <Fragment>
      <Modal
        title="You’re sure?"
        description="If you get out of line you will lose your turn, you can always take a ticket again in the same location or in others."
        buttons={[
          {
            children: 'I understand, leave',
            isPrimary: true,
            onClick: handleLeaveTicket,
            isLoading: isLeaving,
          },
          {
            children: 'Cancel',
            isDefault: true,
            onClick: handleModalLeave,
            disabled: isLeaving,
          },
        ]}
        isShowing={isShowing}
      />

      <div className="tly-home">
        <HeaderScreen>
          <Transaction
            idTransaction={ticket?.displayCode}
            typeTransaction={service?.name}
          />

          <Order
            displayCode={ticket?.displayCode}
            numberOrder={`${ticket?.beforeYours}`}
            isPrimary={ticket?.beforeYours === 0}
            isYourTurn={ticket?.beforeYours === 0}
            isDanger={ticket?.beforeYours ? ticket.beforeYours >= 8 : false}
            isWarning={
              ticket?.beforeYours
                ? ticket.beforeYours <= 8 && ticket.beforeYours >= 1
                : false
            }
          />
        </HeaderScreen>

        <FooterScreen>
          <div>
            <Title>{translate('tickets.booked.title')}</Title>
            <Text hasGaps={false}>
              {translate('tickets.booked.description')}
            </Text>
          </div>

          <div className="tly-ticket-details-buttons">
            <Button isOutline isSecondary onClick={handleModalLeave}>
              {translate('tickets.leave.button_text')}
            </Button>

            <Button>{translate('tickets.announce.button_text')}</Button>
          </div>
        </FooterScreen>
      </div>
    </Fragment>
  )
}
