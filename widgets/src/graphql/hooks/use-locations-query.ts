import * as Apollo from '@apollo/client'
import { useMemo } from 'preact/hooks'

import {
  LocationsQuery as Query,
  LocationsQueryVariables as Variables,
  useLocationsQuery as useQuery,
} from '../generated/graphql'
import { onErrorHandler } from './on-error-handler'

export const useLocationsQuery = (
  options?: Apollo.QueryHookOptions<Query, Variables>
) => {
  const {
    data,
    error,
    loading: isLoading,
    refetch,
  } = useQuery({
    ...options,
    notifyOnNetworkStatusChange: true,
    onError: error => {
      onErrorHandler(error)

      if (options?.onError) options.onError(error)
    },
  })

  const nearby = useMemo(() => (data?.findLocations ?? []).slice(0, 3), [data])
  const others = useMemo(
    () => (data?.findLocations ?? []).filter(l => !nearby.includes(l)),
    [data]
  )

  const hasLocations = useMemo(
    () => Boolean(nearby.length || others.length),
    [data]
  )

  return {
    locations: {
      nearby,
      others,
    },
    hasLocations,
    error,
    isLoading,
    refetch,
  }
}
