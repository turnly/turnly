import clsx from 'clsx'
import { h, JSX } from 'preact'
import { useCallback, useMemo } from 'preact/hooks'

import { Text, Title } from '../components/typography'
import { TicketStatus } from '../hooks/use-internal-state'
import { useTranslation } from '../localization'

export enum TicketsBeforeYours {
  YOU_ARE_NEXT = 0,
  LESS_THAN = 4,
  MORE_THAN = 10,
}

export enum TicketsBeforeYoursLabels {
  YOU_ARE_NEXT = 'ticket.status.you_are_next',
  LESS_THAN = 'ticket.status.less_than_4',
  MORE_THAN = 'ticket.status.more_than_10',
  MORE_THAN_4 = 'ticket.status.more_than_4',
}

export const getStatusColorAndLabelBasedOnNumber = (beforeYours: number) => {
  // You are the first in the queue
  if (beforeYours === TicketsBeforeYours.YOU_ARE_NEXT) {
    return TicketsBeforeYoursLabels.YOU_ARE_NEXT
  }

  // You are in the queue, but the number of people before you is less than 4
  if (beforeYours < TicketsBeforeYours.LESS_THAN) {
    return TicketsBeforeYoursLabels.LESS_THAN
  }

  // You are in the queue, but the number of people before you is more than 10
  if (beforeYours >= TicketsBeforeYours.MORE_THAN) {
    return TicketsBeforeYoursLabels.MORE_THAN
  }

  return TicketsBeforeYoursLabels.MORE_THAN_4
}

export interface OrderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  displayCode: string
  beforeYours: number
  status: TicketStatus
}

export const Order = ({
  displayCode,
  beforeYours,
  status: ticketStatus,
  ...attributes
}: Partial<OrderProps>) => {
  const { translate } = useTranslation()

  const status = useMemo(
    () => getStatusColorAndLabelBasedOnNumber(beforeYours || 0),
    [beforeYours]
  )

  const isYourTurn = useMemo(
    () =>
      status === TicketsBeforeYoursLabels.YOU_ARE_NEXT ||
      ticketStatus === TicketStatus.CALLED ||
      ticketStatus === TicketStatus.RECALLED,
    [status]
  )

  const styles = clsx({
    ['tly-order']: true,
    ['tly-order--is-danger']:
      status === TicketsBeforeYoursLabels.MORE_THAN ||
      status === TicketsBeforeYoursLabels.MORE_THAN_4,
    ['tly-order--is-warning']: status === TicketsBeforeYoursLabels.LESS_THAN,
    ['tly-order--is-primary']: isYourTurn,
  })

  const classes = clsx(styles, attributes.className)

  const getNumberOrder = useCallback(() => {
    if (isYourTurn) return displayCode

    if (status === TicketsBeforeYoursLabels.MORE_THAN) return '10+'

    return beforeYours?.toString()?.padStart(2, '0')
  }, [beforeYours, displayCode, status])

  return (
    <div className={classes}>
      <Title
        className="tly-order-title"
        hasGaps={false}
        title={getNumberOrder()}
      >
        {getNumberOrder()}
      </Title>
      <Text hasGaps={false} isStrong>
        {translate(`tickets.${isYourTurn ? 'your_turn' : 'before_yours'}`)}
      </Text>
    </div>
  )
}
