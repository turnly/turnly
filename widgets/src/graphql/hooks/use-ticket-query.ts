import * as Apollo from '@apollo/client'

import { Notifier } from '../../components/notification'
import {
  GetTicketQuery as Query,
  GetTicketQueryVariables as Variables,
  useGetTicketLazyQuery as useQuery,
} from '../generated/graphql'

export const useGetTicketQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const [getTicketDetails, { data, error, loading: isLoading }] = useQuery({
    ...options,
    fetchPolicy: 'cache-and-network',
    onError: error => {
      Notifier.error(error.message)

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
