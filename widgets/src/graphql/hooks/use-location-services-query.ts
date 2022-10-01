import * as Apollo from '@apollo/client'

import { Notifier } from '../../components/notification'
import {
  GetLocationServicesQuery as Query,
  GetLocationServicesQueryVariables as Variables,
  useGetLocationServicesQuery as useQuery,
} from '../generated/graphql'

export const useLocationServicesQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const {
    data,
    error,
    loading: isLoading,
  } = useQuery({ ...options, onError: error => Notifier.error(error.message) })

  return {
    data: data?.getLocationServices ?? [],
    error,
    isLoading,
  }
}
