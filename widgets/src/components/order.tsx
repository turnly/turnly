import clsx from 'clsx'
import { h, JSX } from 'preact'
import { useMemo, useState } from 'preact/hooks'

import { Title } from '../components/typography'
import { useInternalState } from '../hooks/use-internal-state'

export interface OrderProps extends JSX.HTMLAttributes<HTMLDivElement> {}

export type OrderStatus = 'danger' | 'warning' | 'success'

export const Order = (attributes: Partial<OrderProps>) => {
  const { ticket } = useInternalState()
  const [status, setStatus] = useState<OrderStatus>('danger')
  const [isDanger, isWarning, isSuccess] = useMemo(
    () => [status === 'danger', status === 'warning', status === 'success'],
    [status]
  )

  const styles = clsx({
    ['tly-order']: true,
    ['tly-order--is-danger']: isDanger,
    ['tly-order--is-warning']: isWarning,
    ['tly-order--is-primary']: isSuccess,
  })

  const classes = clsx(styles, attributes.className)

  return (
    <div className={classes}>
      <Title
        className="tly-order-title"
        level={1}
        isDanger={isDanger}
        isWarning={isWarning}
      >
        {ticket?.beforeYours.toString().padStart(2, '0')}
      </Title>
      <Title level={5} isDanger={isDanger} isWarning={isWarning}>
        {!isSuccess ? 'Tickets before yours' : 'Ahoy, your turn!'}
      </Title>
    </div>
  )
}
