import * as Apollo from '@apollo/client'

import {
  GetServiceFieldsQuery as Query,
  GetServiceFieldsQueryVariables as Variables,
  useGetServiceFieldsQuery as useQuery,
} from '../generated/graphql'

export const useServiceFieldsQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const { data, error, loading: isLoading } = useQuery(options)

  return {
    data: data?.getServiceFields ?? [],
    error,
    isLoading,
  }
}
