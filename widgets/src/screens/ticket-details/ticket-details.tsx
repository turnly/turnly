import { Fragment, h } from 'preact'
import { useMemo, useState } from 'preact/hooks'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Modal } from '../../components/modal'
import { Order } from '../../components/order'
import { ServiceParams } from '../../components/services'
import { Transaction } from '../../components/transaction'
import { Text, Title } from '../../components/typography'
import { useAnnounceTicket } from '../../graphql/hooks/use-announce-ticket-mutation'
import { useLeaveTicket } from '../../graphql/hooks/use-leave-ticket-mutation'
import { useGetTicketQuery } from '../../graphql/hooks/use-ticket-query'
import { useCurrentLocation } from '../../hooks/use-current-location'
import {
  Ticket,
  TicketStatus,
  useInternalState,
} from '../../hooks/use-internal-state'
import { useSearchParams } from '../../hooks/use-search-params'
import { useSession } from '../../hooks/use-session'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

const MIN_TICKETS_IN_QUEUE = 8

export const TicketDetailsScreen = () => {
  const { translate } = useTranslation()

  const { navigate } = useNavigator()
  const { ticketId, deleteSearchParams } = useSearchParams()

  const { customer } = useSession()
  const { setCurrentLocation, name } = useCurrentLocation()
  const { service, ticket, setService, setTicket, setAnswers } =
    useInternalState()

  const { leaveCurrentTicket, isLoading: isLeaving } = useLeaveTicket()
  const { announceCurrentTicket, isLoading: isAnnouncing } = useAnnounceTicket()

  const [isShowing, setIsShowing] = useState(false)

  const { isLoading } = useGetTicketQuery({
    variables: { getTicketId: ticketId },
    onCompleted: async ({ getTicket }) =>
      await Promise.all([
        setTicket({
          id: getTicket.id,
          status: getTicket.status as TicketStatus,
          displayCode: getTicket.displayCode,
          beforeYours: getTicket.beforeYours,
          calledToDesk: getTicket.calledToDesk,
          customerId: getTicket.customerId,
        }),
        setService({ ...getTicket.service } as ServiceParams),
        setCurrentLocation({ ...getTicket.location }),
      ]),
    onError: () => {
      deleteSearchParams('tly-ticket-id')
      navigate(SCREEN_NAMES.HOME)
    },
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

      navigate(SCREEN_NAMES.HOME)
    }
  }

  const announceTicket = async () => {
    if (ticket) {
      const ticketUpdated = await announceCurrentTicket(ticket.id)

      console.log(ticketUpdated)

      setTicket(ticketUpdated as Ticket)
    }
  }

  // titles
  const { title, description } = useMemo(() => {
    let title = 'tickets.announce.title'
    let description = 'tickets.announce.description'
    let options = {}

    if (ticket?.status === TicketStatus.ANNOUNCED) {
      title = 'tickets.arrived.title'
      description = 'tickets.arrived.description'
      options = { name: customer.name, location: name }
    }

    return {
      title: translate(title as any, options),
      description: translate(description as any),
    }
  }, [ticket?.status])

  if (isLoading) return null

  if (ticket === null) return null

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
            isDanger={
              ticket?.beforeYours
                ? ticket.beforeYours >= MIN_TICKETS_IN_QUEUE
                : false
            }
            isWarning={
              ticket?.beforeYours
                ? ticket.beforeYours <= MIN_TICKETS_IN_QUEUE &&
                  ticket.beforeYours >= 1
                : false
            }
          />
        </HeaderScreen>

        <FooterScreen>
          <div>
            <Title>{title}</Title>
            <Text hasGaps={false}>{description}</Text>
          </div>

          <div className="tly-ticket-details-buttons">
            <Button
              isOutline
              isSecondary
              onClick={handleModalLeave}
              disabled={isAnnouncing}
            >
              {translate('tickets.leave.button_text')}
            </Button>

            {ticket.status !== TicketStatus.ANNOUNCED && (
              <Button onClick={announceTicket}>
                {translate('tickets.announce.button_text')}
              </Button>
            )}
          </div>
        </FooterScreen>
      </div>
    </Fragment>
  )
}
