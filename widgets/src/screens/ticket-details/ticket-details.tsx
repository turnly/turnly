import { Fragment, h } from 'preact'
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks'

import { Button } from '../../components/button'
import { FooterScreen, HeaderScreen } from '../../components/layouts/screen'
import { Modal } from '../../components/modal'
import { Notifier } from '../../components/notification'
import {
  getStatusColorAndLabelBasedOnNumber,
  Order,
  TicketsBeforeYoursLabels,
} from '../../components/order'
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
import { useLoading } from '../../hooks/use-loading'
import { RealtimeEvents, useRealtime } from '../../hooks/use-realtime'
import { useSearchParams } from '../../hooks/use-search-params'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const TicketDetailsScreen = () => {
  const { translate } = useTranslation()

  const { navigate } = useNavigator()
  const { ticketId, deleteSearchParams } = useSearchParams()

  const { setCurrentLocation, name, id: locationId } = useCurrentLocation()
  const { service, ticket, setService, setTicket, setAnswers } =
    useInternalState()

  const { leaveCurrentTicket, isLoading: isLeaving } = useLeaveTicket()
  const { announceCurrentTicket, isLoading: isAnnouncing } = useAnnounceTicket()

  const [isShowing, setIsShowing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

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
      setLoading(false)

      deleteSearchParams('tly-ticket-id')
      navigate(SCREEN_NAMES.HOME)
    },
  })

  const handleModalLeave = useCallback(() => setIsShowing(p => !p), [])

  const handleLeaveTicket = useCallback(async () => {
    if (ticket) {
      await leaveCurrentTicket(ticket.id)

      await Promise.all([
        setAnswers([]),
        setTicket(null),
        deleteSearchParams('tly-ticket-id'),
      ])

      navigate(SCREEN_NAMES.HOME)
    }
  }, [ticket])

  const handleCompletedTicket = useCallback(async () => {
    if (ticket) {
      await Promise.all([
        setAnswers([]),
        setTicket(null),
        deleteSearchParams('tly-ticket-id'),
      ])

      navigate(SCREEN_NAMES.HOME)
    }
  }, [ticket])

  const announceTicket = useCallback(async () => {
    if (ticket) {
      const ticketUpdated = await announceCurrentTicket(ticket.id)

      setTicket(ticketUpdated as Ticket)
    }
  }, [ticket])

  const statusLabel = useMemo(
    () => getStatusColorAndLabelBasedOnNumber(ticket?.beforeYours || 0),
    [ticket]
  )

  const { title, description } = useMemo(() => {
    if (!ticket)
      return {
        title: '',
        description: '',
      }

    let title = 'tickets.announce.title'
    let description = 'tickets.announce.description'
    let options = {}

    if (
      statusLabel === TicketsBeforeYoursLabels.MORE_THAN ||
      statusLabel === TicketsBeforeYoursLabels.MORE_THAN_4
    ) {
      title = 'tickets.created.title'
      description = 'tickets.created.description'
    }

    if (statusLabel === TicketsBeforeYoursLabels.LESS_THAN) {
      title = 'tickets.announce.title'
      description = 'tickets.announce.description'
    }

    if (ticket.status === TicketStatus.ANNOUNCED) {
      title = 'tickets.arrived.title'
      description = 'tickets.arrived.description'
      options = { organization: name }
    }

    if (
      ticket.status === TicketStatus.ANNOUNCED &&
      statusLabel === TicketsBeforeYoursLabels.YOU_ARE_NEXT
    ) {
      title = 'tickets.you_are_next.title'
      description = 'tickets.you_are_next.description'
    }

    if (
      ticket.status === TicketStatus.CALLED ||
      ticket.status === TicketStatus.RECALLED
    ) {
      title = 'tickets.called.title'
      description = 'tickets.called.description'
      options = { desk: ticket.calledToDesk }
    }

    return {
      title: translate(title as any, options),
      description: translate(description as any),
    }
  }, [ticket?.status, ticket?.beforeYours])

  const { setLoading } = useLoading()

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  const { realtime } = useRealtime()

  useEffect(() => {
    if (!realtime || !ticket || !service) return

    realtime.notify(RealtimeEvents.SUBSCRIBE, {
      roomChannel: `${locationId}.${service.id}`,
    })

    const unsub = realtime.subscribe(
      RealtimeEvents.TICKET_BEFORE_YOURS_UPDATED,
      () => {
        const beforeYours =
          ticket.beforeYours === 0 ? 0 : ticket.beforeYours - 1

        setTicket({ ...ticket, beforeYours })
      }
    )

    const calledSubscriber = realtime.subscribe<{
      ticketId: string
      status: TicketStatus
    }>(RealtimeEvents.TICKET_CALLED, event => {
      if (event.payload.ticketId === ticket.id) {
        setTicket({ ...ticket, status: event.payload.status })
      }
    })

    const cancelledSubscriber = realtime.subscribe<{
      ticketId: string
      status: TicketStatus
    }>(RealtimeEvents.TICKET_CANCELLED, async event => {
      if (event.payload.ticketId === ticket.id) {
        if (
          event.payload.status === TicketStatus.SERVED ||
          event.payload.status === TicketStatus.SERVED_WITH_RATING
        ) {
          setIsCompleted(true)

          return
        }

        await handleCompletedTicket()
        Notifier.info(translate('tickets.cancelled.description'))
      }
    })

    return () => {
      unsub()
      calledSubscriber()
      cancelledSubscriber()
    }
  }, [ticket, service, locationId])

  if (isLoading || ticket === null) return null

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

      <Modal
        title="Ahoy, you’re served!"
        description="Thanks for using our service, we hope to see you again soon. Remember that you can always leave us a comment about your experience."
        buttons={[
          {
            children: 'Ok, sure!',
            isPrimary: true,
            onClick: () => {
              setIsCompleted(false)

              handleCompletedTicket()
            },
          },
        ]}
        isShowing={isCompleted}
      />

      <div className="tly-home">
        <HeaderScreen>
          <div className="tly-ticket-details__trackers">
            <Transaction
              idTransaction={ticket?.displayCode}
              typeTransaction={service?.name}
            />

            <Order
              displayCode={ticket?.displayCode}
              beforeYours={ticket?.beforeYours}
              status={ticket?.status}
            />
          </div>
        </HeaderScreen>

        <FooterScreen>
          <div>
            <Title>{title}</Title>
            <Text>{description}</Text>
          </div>

          <div className="tly-ticket-details-buttons">
            <Button
              isOutline
              isSecondary
              disabled={isAnnouncing || isLeaving}
              onClick={handleModalLeave}
              isLoading={isLeaving}
            >
              {translate('tickets.leave.button_text')}
            </Button>

            {ticket.status === TicketStatus.AVAILABLE && (
              <Button onClick={announceTicket} isLoading={isAnnouncing}>
                {translate('tickets.announce.button_text')}
              </Button>
            )}
          </div>
        </FooterScreen>
      </div>
    </Fragment>
  )
}
