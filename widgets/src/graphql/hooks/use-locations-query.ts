import * as Apollo from '@apollo/client'

import {
  LocationsQuery as Query,
  LocationsQueryVariables as Variables,
  useLocationsQuery as useQuery,
} from '../generated/graphql'

export const useLocationsQuery = (
  options?: Apollo.QueryHookOptions<Query, Variables>
) => {
  const { data, error, loading: isLoading } = useQuery(options)

  return {
    data: data?.findLocations ?? [],
    error,
    isLoading,
  }
}
