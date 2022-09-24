import * as Apollo from '@apollo/client'
import { useMemo } from 'preact/hooks'

import {
  LocationsQuery as Query,
  LocationsQueryVariables as Variables,
  useLocationsQuery as useQuery,
} from '../generated/graphql'

export const useLocationsQuery = (
  options?: Apollo.QueryHookOptions<Query, Variables>
) => {
  const {
    data,
    error,
    loading: isLoading,
    refetch,
  } = useQuery({ ...options, notifyOnNetworkStatusChange: true })

  const locations = useMemo(() => data?.findLocations ?? [], [data])
  const nearby = useMemo(() => locations.slice(0, 3), [locations])

  return {
    data: {
      nearby,
      locations: locations.filter(l => !nearby.includes(l)),
    },
    error,
    isLoading,
    refetch,
  }
}
