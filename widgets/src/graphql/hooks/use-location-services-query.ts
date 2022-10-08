import * as Apollo from '@apollo/client'
import { useEffect, useMemo } from 'preact/hooks'

import { Notifier } from '../../components/notification'
import { useLoading } from '../../hooks/use-loading'
import {
  GetLocationServicesQuery as Query,
  GetLocationServicesQueryVariables as Variables,
  useGetLocationServicesQuery as useQuery,
} from '../generated/graphql'

export type LocationServicesData = Query['getLocationServices']

export const useLocationServicesQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const {
    data,
    error,
    loading: isLoading,
  } = useQuery({ ...options, onError: error => Notifier.error(error.message) })

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
