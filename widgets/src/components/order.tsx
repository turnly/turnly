import clsx from 'clsx'
import { motion as Animated } from 'framer-motion'
import { h, JSX } from 'preact'
import { useCallback, useMemo } from 'preact/hooks'

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
    () =>
      typeof beforeYours !== 'undefined'
        ? getStatusColorAndLabelBasedOnNumber(beforeYours || 0)
        : '',
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

    return beforeYours?.toString()?.padStart(2, '0') || '00'
  }, [beforeYours, displayCode, status])

  const backgroundAndColor = useMemo(() => {
    if (isYourTurn)
      return {
        backgroundColor: '#ddf7ec',
        color: '#02543f',
      }

    if (status === TicketsBeforeYoursLabels.LESS_THAN)
      return {
        backgroundColor: '#fcee9380',
        color: '#723b13',
      }

    if (
      status === TicketsBeforeYoursLabels.MORE_THAN ||
      status === TicketsBeforeYoursLabels.MORE_THAN_4
    )
      return {
        backgroundColor: '#fbd5d5',
        color: '#9a1d1c',
      }

    return {
      backgroundColor: '#fefbfb',
      color: '#6b7c89',
    }
  }, [status, isYourTurn])

  return (
    <Animated.div
      className={classes}
      initial={false}
      animate={{ ...backgroundAndColor }}
      transition={{ duration: 0.2 }}
    >
      <Animated.h2
        className="tly-order-title"
        initial={{ opacity: 0, y: '-0.10em' }}
        animate={{ color: backgroundAndColor.color, opacity: 1, y: '0em' }}
        transition={{ duration: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
        key={getNumberOrder()}
      >
        {getNumberOrder()}
      </Animated.h2>
      <Animated.p
        initial={{ opacity: 0 }}
        animate={{ color: backgroundAndColor.color, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="tly-order-text"
      >
        {translate(`tickets.${isYourTurn ? 'your_turn' : 'before_yours'}`)}
      </Animated.p>
    </Animated.div>
  )
}
