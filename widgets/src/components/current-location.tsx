import { h } from 'preact'
import { FiSend } from 'react-icons/fi'

import { useCurrentLocation } from '../hooks/use-current-location'
import { Text, Title } from './typography'

export const CurrentLocation = () => {
  const { name, address } = useCurrentLocation()

  return (
    <div className="tly-current-location">
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
