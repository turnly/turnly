import clsx from 'clsx'
import { motion as Animated } from 'framer-motion'
import { h } from 'preact'
import { useCallback, useMemo } from 'preact/compat'
import { AiOutlineCheck } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

import { useCurrentLocation } from '../hooks/use-current-location'
import { useGoogleMaps } from '../hooks/use-google-maps'
import { TicketStatus, useInternalState } from '../hooks/use-internal-state'
import { Text, Title } from './typography'

export const CurrentLocation = () => {
  const { openGoogleMaps } = useGoogleMaps()
  const { name, address, latitude, longitude, id } = useCurrentLocation()
  const { ticket } = useInternalState()

  const isSuccess = useMemo(
    () => ticket?.status === TicketStatus.ANNOUNCED,
    [ticket?.status]
  )

  const styles = clsx({
    ['tly-current-location']: true,
    ['tly-current-location--is-success']: isSuccess,
  })
  const classes = clsx(styles)

  const openCoords = useCallback(
    () => openGoogleMaps(latitude, longitude),
    [latitude, longitude]
  )

  return (
    <Animated.div layout layoutId={id} className={classes} onClick={openCoords}>
      <div className="tly-current-location-details">
        <Title hasGaps={false} level={5}>
          {name}
        </Title>
        <Text hasGaps={false} isSmall>
          {address}
        </Text>
      </div>

      <div className="tly-current-location-button">
        {isSuccess ? (
          <AiOutlineCheck color="var(--tly-green-dark)" />
        ) : (
          <FiSend color="#2485BA" />
        )}
      </div>
    </Animated.div>
  )
}
