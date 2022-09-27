import { h, JSX } from 'preact'

import { Service, ServiceProps } from './service'

export interface ServicesProps extends JSX.HTMLAttributes<HTMLDivElement> {
  services: ServiceProps[]
}

export const Services = ({ services }: ServicesProps) => {
  return (
    <div className="tly-services-list">
      {services.map((service: ServiceProps) => (
        <Service
          key={Math.random()}
          title={service.title}
          tickets={service.tickets}
          isSuccess={service.isSuccess}
          status={service.status}
          onClick={service.onClick}
          disabled={service.disabled}
        />
      ))}
    </div>
  )
}
