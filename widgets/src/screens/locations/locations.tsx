import { Fragment, h } from 'preact'
import { useState } from 'preact/hooks'
import { HiOutlineClock, HiOutlinePaperAirplane } from 'react-icons/hi'

import { SearchInput } from '../../components/form/search-input'
import { Locations } from '../../components/locations'
import { useLocationsQuery } from '../../graphql/hooks/use-locations-query'
import { useCurrentLocation } from '../../hooks/use-current-location'
import { useTranslation } from '../../localization'

export const LocationsScreen = () => {
  const { translate } = useTranslation()
  const { ...currentLocation } = useCurrentLocation()

  const [search, setSearch] = useState('')
  const { locations, hasLocations, isLoading, refetch } = useLocationsQuery()

  // Get device location with useGeolocation()

  return (
    <Fragment>
      <div className="tly-locations__screen">
        <SearchInput
          placeholder={translate('locations.labels.search')}
          isLoading={isLoading}
          onSearchChange={searchQuery => {
            setSearch(searchQuery)
            refetch({ searchQuery })
          }}
        />

        {hasLocations && (
          <div className="tly-locations__container">
            {!search && (
              <Locations
                title={translate('locations.labels.recent')}
                icon={<HiOutlineClock />}
                locations={currentLocation?.id ? [currentLocation] : []}
              />
            )}

            <Locations
              title={translate('locations.labels.nearby')}
              icon={<HiOutlinePaperAirplane />}
              locations={locations.nearby}
            />

            <Locations
              title={translate('locations.labels.other_locations')}
              locations={locations.others}
            />
          </div>
        )}
      </div>
    </Fragment>
  )
}
