import { Fragment, h } from 'preact'
import { HiOutlineClock, HiOutlinePaperAirplane } from 'react-icons/hi'

import { SearchInput } from '../../components/form/search-input'
import { Locations } from '../../components/locations'
import { useLocationsQuery } from '../../graphql/hooks/use-locations-query'
import { useTranslation } from '../../localization'

export const LocationsScreen = () => {
  const { translate } = useTranslation()
  const { locations, hasLocations, isLoading, refetch } = useLocationsQuery()

  // Get device location with useGeolocation()
  // Set the last selected location with zustand and show it

  return (
    <Fragment>
      <div className="tly-locations__screen">
        <SearchInput
          placeholder={translate('locations.labels.search')}
          isLoading={isLoading}
          onSearchChange={searchQuery => refetch({ searchQuery })}
        />

        {hasLocations && (
          <div className="tly-locations__container">
            <Locations
              title={translate('locations.labels.recent')}
              icon={<HiOutlineClock />}
              locations={
                [
                  /**
                   * @todo Add Current Location
                   */
                ]
              }
            />

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
