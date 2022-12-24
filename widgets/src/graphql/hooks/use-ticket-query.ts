import * as Apollo from '@apollo/client'

import {
  GetTicketQuery as Query,
  GetTicketQueryVariables as Variables,
  useGetTicketLazyQuery as useQuery,
} from '../generated/graphql'
import { onErrorHandler } from './on-error-handler'

export const useGetTicketQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const [getTicketDetails, { data, error, loading: isLoading }] = useQuery({
    ...options,
    fetchPolicy: 'cache-and-network',
    onError: error => {
      onErrorHandler(error)

      if (options.onError) options.onError(error)
    },
  })

  return {
    getTicketDetails,
    data: data?.getTicket,
    error,
    isLoading,
  }
}
