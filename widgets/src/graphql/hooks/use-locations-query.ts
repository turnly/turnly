import * as Apollo from '@apollo/client'

import {
  LocationsQuery,
  LocationsQueryVariables,
  useLocationsQuery,
} from '../generated/graphql'

export const useLocations = (
  options?: Apollo.QueryHookOptions<LocationsQuery, LocationsQueryVariables>
) => {
  const { data, error, loading: isLoading } = useLocationsQuery(options)

  return {
    data: data?.findLocations ?? [],
    error,
    isLoading,
  }
}
