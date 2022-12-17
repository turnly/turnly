import clsx from 'clsx'
import { h } from 'preact'
import { HTMLAttributes } from 'preact/compat'
import { useCallback } from 'preact/hooks'
import { AiOutlineCheck } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

import { useCurrentLocation } from '../hooks/use-current-location'
import { useGoogleMap } from '../hooks/use-google-map'
import { Text, Title } from './typography'

export interface CurrentLocationProps extends HTMLAttributes<HTMLDivElement> {
  isSuccess: boolean
}

export const CurrentLocation = ({
  isSuccess,
  ...attributes
}: Partial<CurrentLocationProps>) => {
  const { name, address, latitude, longitude } = useCurrentLocation()
  const { openGoogleMap } = useGoogleMap()

  const styles = clsx({
    ['tly-current-location']: true,
    ['tly-current-location--is-success']: isSuccess,
  })
  const classes = clsx(styles, attributes.className)

  const openCoords = useCallback(
    () => openGoogleMap(latitude, longitude),
    [latitude, longitude]
  )

  return (
    <div className={classes} onClick={openCoords} {...attributes}>
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
    </div>
  )
}
