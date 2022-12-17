import clsx from 'clsx'
import { h, JSX } from 'preact'

import { Title } from '../components/typography'
import { useTranslation } from '../localization'

export interface OrderProps extends JSX.HTMLAttributes<HTMLDivElement> {
  numberOrder: string
  isDanger: boolean
  isWarning: boolean
  isPrimary: boolean
  displayCode: string
  isYourTurn: boolean
}

export const Order = ({
  numberOrder,
  isDanger,
  isWarning,
  isPrimary,
  displayCode,
  isYourTurn,
  ...attributes
}: Partial<OrderProps>) => {
  const { translate } = useTranslation()

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
        level={isYourTurn ? 2 : 1}
        isDanger={isDanger}
        isGreen={isPrimary}
        isWarning={isWarning}
      >
        {isYourTurn ? displayCode : numberOrder?.padStart(2, '0')}
      </Title>
      <Title
        level={5}
        isDanger={isDanger}
        isGreen={isPrimary}
        isWarning={isWarning}
      >
        {translate(`tickets.${isYourTurn ? 'your_turn' : 'before_yours'}`)}
      </Title>
    </div>
  )
}
