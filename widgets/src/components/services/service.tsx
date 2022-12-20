import clsx from 'clsx'
import { motion as Animated } from 'framer-motion'
import { h, JSX } from 'preact'
import { useCallback, useMemo } from 'preact/hooks'
import { AiFillCheckCircle } from 'react-icons/ai'

import { Text, Title } from '../../components/typography'
import { useInternalState } from '../../hooks/use-internal-state'
import { useTranslation } from '../../localization'

export interface ServiceParams {
  id: string
  name: string
  description?: string | null
  locationId: string
  ticketsWaiting: number
}

export interface ServiceProps
  extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'data'> {
  onClick?: () => void
  data: ServiceParams
}

export const Service = ({ disabled, data, ...attributes }: ServiceProps) => {
  const { translate } = useTranslation()
  const { setService, service } = useInternalState()
  const isSelected = useMemo(() => service?.id === data.id, [data, service])

  const styles = clsx({
    'tly-service': true,
    'tly-service--is-selected': isSelected,
    'tly-service--is-disabled': disabled,
  })

  const classes = clsx(styles, attributes.className)
  const handleClick = useCallback(() => {
    if (disabled) return

    setService(data)
  }, [data])

  const getLabel = useCallback(
    () =>
      disabled
        ? translate('services.labels.unavailable')
        : !data.ticketsWaiting
        ? translate('services.labels.tickets_behind')
        : translate('services.labels.tickets_ahead'),
    [data]
  )

  return (
    <Animated.div
      className={classes}
      onClick={handleClick}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      key={data.id}
    >
      <div className="tly-service-content">
        <Title hasGaps={false} level={4} isFontMedium>
          {data.name}
        </Title>
        <div className="tly-service-content-details">
          {Boolean(data.ticketsWaiting) && (
            <Title level={5} hasGaps={false} isGray>
              {String(data.ticketsWaiting).padStart(2, '0')}
            </Title>
          )}
          <Text hasGaps={false}>{getLabel()}</Text>
        </div>
      </div>

      {isSelected && (
        <div className="tly-service-icon">
          <AiFillCheckCircle size={24} />
        </div>
      )}
    </Animated.div>
  )
}
