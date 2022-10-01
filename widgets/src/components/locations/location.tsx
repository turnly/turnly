import { h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { useCurrentLocation } from '../../hooks/use-current-location'
import { SCREEN_NAMES, useNavigator } from '../../navigation'
import { Text, Title } from '../typography'

export interface LocationParams {
  id: string
  name: string
  address: string
  country: string
  longitude: string
  latitude: string
}

export interface LocationProps
  extends Omit<JSX.HTMLAttributes<HTMLInputElement>, 'icon' | 'data'> {
  data: LocationParams
  icon: JSX.Element
}

export const Location = ({ data, icon }: LocationProps) => {
  const { setCurrentLocation } = useCurrentLocation()
  const { navigate } = useNavigator()

  const handleClick = useCallback(() => {
    setCurrentLocation(data)

    navigate(SCREEN_NAMES.SERVICES)
  }, [data])

  return (
    <div
      className="tly-locations__item"
      title={data.name}
      onClick={handleClick}
    >
      <div className="tly-locations__item-icon" {...{ children: icon }} />
      <div className="tly-locations__item-content">
        <Title level={4} hasGaps={false} {...{ children: data.name }} />
        <Text hasGaps={false} {...{ children: data.address }} />
      </div>
    </div>
  )
}
