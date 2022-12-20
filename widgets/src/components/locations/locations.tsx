import { AnimatePresence, motion as Animated } from 'framer-motion'
import { h, JSX } from 'preact'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { Title } from '../typography'
import { Location, LocationParams } from './location'

export interface LocationsProps
  extends Omit<JSX.HTMLAttributes<HTMLInputElement>, 'icon' | 'data'> {
  locations: LocationParams[]
  icon?: JSX.Element
  title: string
}

export const Locations = ({
  locations,
  icon = <HiOutlineLocationMarker />,
  title,
}: LocationsProps) =>
  locations.length ? (
    <div className="tly-locations__row">
      <Title level={5} isUpper>
        {title}
      </Title>

      <Animated.div
        layout
        transition={{ duration: 0.2 }}
        className="tly-locations__content"
        key="tly-locations__content"
      >
        <AnimatePresence mode="wait">
          {locations.map(location => (
            <Location key={location.id} data={location} icon={icon} />
          ))}
        </AnimatePresence>
      </Animated.div>
    </div>
  ) : null
