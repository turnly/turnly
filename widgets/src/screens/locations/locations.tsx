import { AnimatePresence, LayoutGroup, motion as Animated } from 'framer-motion'
import { Fragment, h } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { HiOutlineClock, HiOutlinePaperAirplane } from 'react-icons/hi'

import { SearchInput } from '../../components/form/search-input'
import { Locations } from '../../components/locations'
import { LocationsQuery } from '../../graphql/generated/graphql'
import { useLocationsQuery } from '../../graphql/hooks/use-locations-query'
import { useCurrentLocation } from '../../hooks/use-current-location'
import { useTranslation } from '../../localization'

export const LocationsScreen = () => {
  const { translate } = useTranslation()
  const { ...currentLocation } = useCurrentLocation()

  const [search, setSearch] = useState('')
  const { locations, hasLocations, isLoading, refetch } = useLocationsQuery()

  const getCleanLocations = useCallback(
    (locations: LocationsQuery['findLocations']) => {
      return !search
        ? locations.filter(({ id }) => id !== currentLocation?.id)
        : locations
    },
    [search, locations]
  )

  // TODO: Get device location with useGeolocation()

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

        <AnimatePresence mode="wait">
          {hasLocations && (
            <Animated.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="tly-locations__container"
              key="tly-locations__container"
            >
              <LayoutGroup>
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
                  locations={getCleanLocations(locations.nearby)}
                />

                <Locations
                  title={translate('locations.labels.other_locations')}
                  locations={getCleanLocations(locations.others)}
                />
              </LayoutGroup>
            </Animated.div>
          )}
        </AnimatePresence>
      </div>
    </Fragment>
  )
}
