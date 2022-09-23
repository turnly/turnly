import * as Apollo from '@apollo/client'

import {
  GetTicketQuery as Query,
  GetTicketQueryVariables as Variables,
  useGetTicketQuery as useQuery,
} from '../generated/graphql'

export const useGetTicketQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const { data, error, loading: isLoading } = useQuery(options)

  return {
    data: data?.getTicket,
    error,
    isLoading,
  }
}
