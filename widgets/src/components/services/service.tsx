import clsx from 'clsx'
import { h, JSX } from 'preact'
import { AiFillCheckCircle } from 'react-icons/ai'

import { Text, Title } from '../../components/typography'

export interface ServiceProps extends JSX.HTMLAttributes<HTMLDivElement> {
  title: string
  status: string
  tickets: number
  onClick: () => void
  isSuccess?: boolean
}

export const Service = ({
  title,
  status,
  tickets,
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

  const classess = clsx(styles, attributes.className)

  return (
    <div className={classess} onClick={disabled ? onClick : undefined}>
      <div className="tly-service-content">
        <Title hasGaps={false}>{title}</Title>
        <div className="tly-service-content-details">
          <Title level={4} hasGaps={false}>
            {tickets}
          </Title>
          <Text hasGaps={false}>{status}</Text>
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
