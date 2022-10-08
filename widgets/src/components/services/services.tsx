import { Fragment, h, JSX } from 'preact'
import { useEffect } from 'preact/hooks'

import { useLocationServicesInRealtime } from '../../hooks/use-location-services-in-realtime'
import { useTranslation } from '../../localization'
import { EmptyState } from '../empty-states'
import { Notifier } from '../notification'
import { Title } from '../typography'
import { Service } from './service'

export interface ServicesProps extends JSX.HTMLAttributes<HTMLDivElement> {
  locationId: string
}

export const Services = ({ locationId }: ServicesProps) => {
  const { translate } = useTranslation()

  const { isLoading, hasServices, services } =
    useLocationServicesInRealtime(locationId)

  useEffect(() => {
    if (!isLoading && !hasServices) {
      Notifier.warn(translate('services.labels.services_not_found'))
    }
  }, [isLoading, hasServices])

  if (isLoading) return null

  return (
    <div className="tly-services-content">
      {hasServices ? (
        <Fragment>
          <Title level={5} isGray isFontMedium>
            {translate('services.labels.hint')}
          </Title>

          <div className="tly-services-list">
            {services.map(service => (
              <Service key={service.id} data={service} />
            ))}
          </div>
        </Fragment>
      ) : (
        <EmptyState />
      )}
    </div>
  )
}
