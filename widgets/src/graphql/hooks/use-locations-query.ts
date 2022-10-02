import * as Apollo from '@apollo/client'
import { useMemo } from 'preact/hooks'

import { Notifier } from '../../components/notification'
import { useTranslation } from '../../localization'
import {
  LocationsQuery as Query,
  LocationsQueryVariables as Variables,
  useLocationsQuery as useQuery,
} from '../generated/graphql'

export const useLocationsQuery = (
  options?: Apollo.QueryHookOptions<Query, Variables>
) => {
  const { translate } = useTranslation()
  const {
    data,
    error,
    loading: isLoading,
    refetch,
  } = useQuery({
    ...options,
    notifyOnNetworkStatusChange: true,
    onError: error => {
      const isNotFound = error.graphQLErrors.some(
        ({ extensions }) => extensions['code'] === 'NOT_FOUND'
      )

      if (isNotFound)
        return Notifier.warning(translate('locations.labels.search_no_results'))

      Notifier.error(error.message)
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
