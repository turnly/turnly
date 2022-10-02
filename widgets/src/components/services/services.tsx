import { h, JSX } from 'preact'

import { Service, ServiceProps } from './service'

export interface ServicesProps extends JSX.HTMLAttributes<HTMLDivElement> {
  services: ServiceProps[]
}

export const Services = ({ services }: ServicesProps) => (
  <div className="tly-services-list">
    {services.map((service: ServiceProps) => (
      <Service key={Math.random()} {...service} />
    ))}
  </div>
)
