import clsx from 'clsx'
import { motion as Animated } from 'framer-motion'
import { h, JSX } from 'preact'
import { useCallback } from 'preact/hooks'

import { useAppearance } from '../../hooks/use-appearance'
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
  const { isFlat } = useAppearance()

  const handleClick = useCallback(() => {
    setCurrentLocation(data)

    navigate(SCREEN_NAMES.SERVICES)
  }, [data])

  const styles = clsx({
    ['tly-locations__item']: true,
    ['tly-locations__item--is-flat']: isFlat,
  })

  return (
    <Animated.div
      layout
      transition={{ duration: 0.4 }}
      key={data.id}
      layoutId={data.id}
      className={styles}
      title={data.name}
      onClick={handleClick}
    >
      <div className="tly-locations__item-icon" {...{ children: icon }} />
      <div className="tly-locations__item-content">
        <Title level={4} hasGaps={false} {...{ children: data.name }} />
        <Text hasGaps={false} {...{ children: data.address }} />
      </div>
    </Animated.div>
  )
}
