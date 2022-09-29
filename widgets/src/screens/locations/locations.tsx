import { Fragment, h } from 'preact'

import { SearchInput } from '../../components/form/search-input'
import { Locations } from '../../components/locations'
import { useLocationsQuery } from '../../graphql/hooks/use-locations-query'
import { useTranslation } from '../../localization'

export const LocationsScreen = () => {
  const { translate } = useTranslation()
  const { data, isLoading, refetch } = useLocationsQuery()

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

        <div className="tly-locations__container">
          <Locations
            title="Recent activity"
            icon={<div />}
            locations={[
              {
                id: 'loc_BGbNQAAlThd0JgiuxxHcW',
                name: 'Main Office',
                address: '963 W. Belmont Ave. Chicago, IL 606',
                country: 'USA',
                longitude: 2.1540000438690186,
                latitude: 4.235000133514,
              },
            ]}
          />

          <Locations
            title="Nearby locations"
            icon={<div />}
            locations={[
              {
                id: 'loc_BGbNQAAlThd0JgiuxxHcW',
                name: 'Main Office Office space rentals Office space rentals',
                address: '963 W. Belmont Ave. Chicago, IL 606',
                country: 'USA',
                longitude: 2.1540000438690186,
                latitude: 4.235000133514,
              },
              ...data.nearby,
            ]}
          />

          <Locations
            title="Other locations"
            locations={[
              {
                id: 'loc_BGbNQAAlThd0JgiuxxHcW',
                name: 'Office space rentals',
                address: '963 W. Belmont Ave. Chicago, IL 606',
                country: 'USA',
                longitude: 2.1540000438690186,
                latitude: 4.235000133514,
              },
              ...data.locations,
            ]}
          />
        </div>
      </div>
    </Fragment>
  )
}
