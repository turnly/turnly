import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import { FiSend } from 'react-icons/fi'

import { useCurrentLocation } from '../hooks/use-current-location'
import { useGoogleMap } from '../hooks/use-google-map'
import { Text, Title } from './typography'

export const CurrentLocation = () => {
  const { name, address, latitude, longitude } = useCurrentLocation()
  const { openGoogleMap } = useGoogleMap()

  const openCoords = useCallback(
    () => openGoogleMap(latitude, longitude),
    [latitude, longitude]
  )

  return (
    <div className="tly-current-location" onClick={openCoords}>
      <div className="tly-current-location-details">
        <Title hasGaps={false} level={5}>
          {name}
        </Title>
        <Text hasGaps={false} isSmall>
          {address}
        </Text>
      </div>

      <div className="tly-current-location-button">
        <FiSend color="#2485BA" />
      </div>
    </div>
  )
}
