import clsx from 'clsx'
import { h, JSX } from 'preact'
import { AiFillCheckCircle } from 'react-icons/ai'

import { Text, Title } from '../../components/typography'

export interface ServiceProps extends JSX.HTMLAttributes<HTMLDivElement> {
  id: string
  name: string
  description?: string | null
  locationId: string
  ticketsWaiting: number
  onClick?: () => void
  isSuccess?: boolean
}

export const Service = ({
  name,
  ticketsWaiting,
  onClick,
  isSuccess,
  disabled,
  ...attributes
}: ServiceProps) => {
  const styles = clsx({
    'tly-service': true,
    'tly-service--is-success': isSuccess,
    'tly-service--is-disabled': disabled,
  })

  const classes = clsx(styles, attributes.className)

  return (
    <div className={classes} onClick={disabled ? onClick : undefined}>
      <div className="tly-service-content">
        <Title hasGaps={false} level={4} isFontMedium>
          {name}
        </Title>
        <div className="tly-service-content-details">
          <Title level={5} hasGaps={false} isGray>
            {ticketsWaiting}
          </Title>
          <Text hasGaps={false}>Tickets ahead</Text>
        </div>
      </div>

      {isSuccess && (
        <div className="tly-content-icon-icon">
          <AiFillCheckCircle size={24} color="#5ace71" />
        </div>
      )}
    </div>
  )
}
