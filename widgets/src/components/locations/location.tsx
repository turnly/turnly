import { h, JSX } from 'preact'

import { Text, Title } from '../typography'

export interface LocationParams {
  id: string
  name: string
  address: string
  country: string
  longitude: number
  latitude: number
}

export interface LocationProps
  extends Omit<JSX.HTMLAttributes<HTMLInputElement>, 'icon' | 'data'> {
  data: LocationParams
  icon: JSX.Element
}

export const Location = ({ data: { name, address }, icon }: LocationProps) => {
  return (
    <div className="tly-locations__item" title={name}>
      <div className="tly-locations__item-icon" {...{ children: icon }} />
      <div className="tly-locations__item-content">
        <Title level={4} hasGaps={false} {...{ children: name }} />
        <Text hasGaps={false} {...{ children: address }} />
      </div>
    </div>
  )
}
