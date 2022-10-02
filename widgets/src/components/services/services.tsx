import { h, JSX } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import {
  LocationServicesData,
  useLocationServicesQuery,
} from '../../graphql/hooks/use-location-services-query'
import { RealtimeEvents, useRealtime } from '../../hooks/use-realtime'
import { Service } from './service'

export interface ServicesProps extends JSX.HTMLAttributes<HTMLDivElement> {
  locationId: string
}

export const Services = ({ locationId }: ServicesProps) => {
  const { realtime } = useRealtime()
  const [services, setServices] = useState<LocationServicesData>([])

  const { isLoading } = useLocationServicesQuery({
    variables: { locationId },
    onCompleted: data => setServices(data.getLocationServices),
  })

  useEffect(() => {
    if (!realtime) return

    realtime.notify(RealtimeEvents.SUBSCRIBE, { roomChannel: locationId })

    const unsub = realtime.subscribe<{
      locationId: string
      serviceId: string
    }>(
      [
        RealtimeEvents.SERVICE_TICKETS_AHEAD,
        RealtimeEvents.SERVICE_TICKETS_BEHIND,
      ],
      event => {
        setServices(prevServices =>
          prevServices.map(srv => {
            if (srv.id === event.payload.serviceId) {
              srv.ticketsWaiting =
                event.name === RealtimeEvents.SERVICE_TICKETS_AHEAD
                  ? (srv.ticketsWaiting += 1)
                  : (srv.ticketsWaiting -= 1)
            }

            return srv
          })
        )
      }
    )

    return () => {
      unsub()
    }
  }, [])

  if (isLoading) return null

  return (
    <div className="tly-services-list">
      {services.map(service => (
        <Service key={service.id} {...service} />
      ))}
    </div>
  )
}
