import clsx from 'clsx'
import { h, JSX } from 'preact'

import { Title } from '../components/typography'

export interface OrderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  numberOrder: string
  isDanger: boolean
  isWarning: boolean
  isPrimary: boolean
}

export const Order = ({
  numberOrder,
  isDanger,
  isWarning,
  isPrimary,
  ...attributes
}: Partial<OrderProps>) => {
  const styles = clsx({
    ['tly-order']: true,
    ['tly-order--is-danger']: isDanger,
    ['tly-order--is-warning']: isWarning,
    ['tly-order--is-primary']: isPrimary,
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
        {numberOrder}
      </Title>
      <Title level={5} isDanger={isDanger} isWarning={isWarning}>
        Tickets before yours
      </Title>
    </div>
  )
}
