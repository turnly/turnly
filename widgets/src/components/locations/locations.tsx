import { h, JSX } from 'preact'

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
  icon = <div />,
  title,
}: LocationsProps) =>
  locations.length ? (
    <div className="tly-locations__row">
      <Title level={5}>{title}</Title>

      <div className="tly-locations__content">
        {locations.map(location => (
          <Location key={location.id} data={location} icon={icon} />
        ))}
      </div>
    </div>
  ) : null
