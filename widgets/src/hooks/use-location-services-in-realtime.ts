import { useEffect, useState } from 'preact/hooks'

import {
  LocationServicesData,
  useLocationServicesQuery,
} from '../graphql/hooks/use-location-services-query'
import { RealtimeEvents, useRealtime } from './use-realtime'

export type Payload = {
  locationId: string
  serviceId: string
}

export const useLocationServicesInRealtime = (locationId: string) => {
  const { realtime } = useRealtime()

  const [services, setServices] = useState<LocationServicesData>([])

  const { isLoading, hasServices } = useLocationServicesQuery({
    variables: { locationId },
    fetchPolicy: 'cache-and-network',
    onCompleted: data => setServices(data.getLocationServices),
  })

  useEffect(() => {
    if (!realtime) return

    realtime.notify(RealtimeEvents.SUBSCRIBE, { roomChannel: locationId })

    const unsub = realtime.subscribe<Payload>(
      [
        RealtimeEvents.SERVICE_TICKETS_AHEAD,
        RealtimeEvents.SERVICE_TICKETS_BEHIND,
      ],
      event => {
        setServices(prevServices =>
          prevServices.map(srv => {
            if (srv.id === event.payload.serviceId) {
              const ticketsWaiting =
                event.name === RealtimeEvents.SERVICE_TICKETS_AHEAD
                  ? srv.ticketsWaiting + 1
                  : srv.ticketsWaiting - 1

              return { ...srv, ticketsWaiting }
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

  return {
    services,
    hasServices,
    isLoading,
  }
}
