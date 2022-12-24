import * as Apollo from '@apollo/client'
import { useEffect, useMemo } from 'preact/hooks'

import { useLoading } from '../../hooks/use-loading'
import {
  GetLocationServicesQuery as Query,
  GetLocationServicesQueryVariables as Variables,
  useGetLocationServicesQuery as useQuery,
} from '../generated/graphql'
import { onErrorHandler } from './on-error-handler'

export type LocationServicesData = Query['getLocationServices']

export const useLocationServicesQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const {
    data,
    error,
    loading: isLoading,
  } = useQuery({
    ...options,
    fetchPolicy: 'cache-and-network',
    onError: error => {
      onErrorHandler(error)

      if (options.onError) options.onError(error)
    },
  })

  const { setLoading } = useLoading()

  useEffect(() => {
    setLoading(isLoading)
  }, [isLoading])

  const hasServices = useMemo(
    () => (data?.getLocationServices ?? []).length !== 0,
    [data]
  )

  return {
    data: data?.getLocationServices ?? [],
    error,
    isLoading,
    hasServices,
  }
}
