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
import { useNotification } from '../../hooks/use-notification'
import { RealtimeEvents, useRealtime } from '../../hooks/use-realtime'
import { useSearchParams } from '../../hooks/use-search-params'
import { useTranslation } from '../../localization'
import { SCREEN_NAMES, useNavigator } from '../../navigation'

export const TicketDetailsScreen = () => {
  const { translate } = useTranslation()
  const { realtime } = useRealtime()
  const { initNotification, showNotification, isNotificationAllowed } =
    useNotification()

  const { navigate } = useNavigator()
  const { ticketId, deleteSearchParams } = useSearchParams()

  const { setCurrentLocation, name, id: locationId } = useCurrentLocation()
  const { service, ticket, setService, setTicket, setAnswers } =
    useInternalState()

  const { leaveCurrentTicket, isLoading: isLeaving } = useLeaveTicket()
  const { announceCurrentTicket, isLoading: isAnnouncing } = useAnnounceTicket()

  const [isShowing, setIsShowing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const { isLoading, getTicketDetails } = useGetTicketQuery({
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
    () => getStatusColorAndLabelBasedOnNumber(ticket?.beforeYours.length || 0),
    [ticket]
  )

  const { title, description } = useMemo(() => {
    let title = 'tickets.announce.title'
    let description = 'tickets.announce.description'
    let options = {}

    if (!ticket) {
      title = 'tickets.created.title'
      description = 'tickets.created.description'
    }

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

    if (
      ticket?.status === TicketStatus.ANNOUNCED ||
      ticket?.status === TicketStatus.RETURNED
    ) {
      title = 'tickets.arrived.title'
      description = 'tickets.arrived.description'
      options = { organization: name }
    }

    if (
      (ticket?.status === TicketStatus.ANNOUNCED ||
        ticket?.status === TicketStatus.RETURNED) &&
      statusLabel === TicketsBeforeYoursLabels.YOU_ARE_NEXT
    ) {
      title = 'tickets.you_are_next.title'
      description = 'tickets.you_are_next.description'
    }

    if (
      ticket?.status === TicketStatus.CALLED ||
      ticket?.status === TicketStatus.RECALLED
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

  useEffect(() => {
    if (!isNotificationAllowed()) {
      Notifier.info(translate('notifications.permission'), {
        delay: 2_000,
        position: Notifier.POSITION.TOP_CENTER,
        onClose: () => initNotification(),
      })
    }
  }, [])

  useEffect(() => {
    if (ticketId && !ticket) {
      getTicketDetails({ variables: { getTicketId: ticketId } })
    }
  }, [ticketId, ticket])

  useEffect(() => {
    if (!realtime || !ticket || !service) return

    realtime.notify(RealtimeEvents.SUBSCRIBE, {
      roomChannel: `${locationId}.${service.id}`,
    })

    const unsub = realtime.subscribe(
      RealtimeEvents.TICKET_BEFORE_YOURS_UPDATED,
      event => {
        const beforeYours = ticket.beforeYours.filter(
          id => event.payload.ticketId !== id
        )

        setTicket({ ...ticket, beforeYours })
        showNotification(
          translate('notifications.ticket_before_yours_updated', {
            beforeYours: beforeYours.length,
          })
        )
      }
    )

    const calledSubscriber = realtime.subscribe<{
      ticketId: string
      status: TicketStatus
    }>(RealtimeEvents.TICKET_CALLED, event => {
      if (event.payload.ticketId === ticket.id) {
        setTicket({ ...ticket, status: event.payload.status })

        showNotification(translate('notifications.ticket_called_to_desk'))
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
          showNotification(translate('notifications.ticket_served'))

          return
        }

        if (event.payload.status === TicketStatus.RETURNED) {
          setTicket({ ...ticket, status: TicketStatus.RETURNED })
          showNotification(translate('notifications.ticket_returned'))

          return
        }

        await handleCompletedTicket()
        Notifier.warn(translate('tickets.cancelled.description'))
      }
    })

    return () => {
      unsub()
      calledSubscriber()
      cancelledSubscriber()
    }
  }, [ticket, service, locationId])

  return (
    <Fragment>
      <Modal
        title={translate('tickets.leave_confirmation.title')}
        description={translate('tickets.leave_confirmation.description')}
        buttons={[
          {
            children: translate(
              'tickets.leave_confirmation.affirmative_button_text'
            ),
            isPrimary: true,
            onClick: handleLeaveTicket,
            isLoading: isLeaving,
          },
          {
            children: translate(
              'tickets.leave_confirmation.negative_button_text'
            ),
            isDefault: true,
            onClick: handleModalLeave,
            disabled: isLeaving,
          },
        ]}
        isShowing={isShowing}
      />

      <Modal
        title={translate('tickets.served.title')}
        description={translate('tickets.served.description')}
        buttons={[
          {
            children: translate('tickets.served.button_text'),
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
              beforeYours={ticket?.beforeYours.length}
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
              disabled={isAnnouncing || isLeaving || isLoading}
              onClick={handleModalLeave}
              isLoading={isLeaving}
            >
              {translate('tickets.leave.button_text')}
            </Button>

            {ticket?.status === TicketStatus.AVAILABLE && (
              <Button
                onClick={announceTicket}
                isLoading={isAnnouncing}
                disabled={isLoading}
              >
                {translate('tickets.announce.button_text')}
              </Button>
            )}
          </div>
        </FooterScreen>
      </div>
    </Fragment>
  )
}
