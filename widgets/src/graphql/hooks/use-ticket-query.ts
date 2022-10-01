import * as Apollo from '@apollo/client'

import { Notifier } from '../../components/notification'
import {
  GetTicketQuery as Query,
  GetTicketQueryVariables as Variables,
  useGetTicketQuery as useQuery,
} from '../generated/graphql'

export const useGetTicketQuery = (
  options: Apollo.QueryHookOptions<Query, Variables>
) => {
  const {
    data,
    error,
    loading: isLoading,
  } = useQuery({ ...options, onError: error => Notifier.error(error.message) })

  return {
    data: data?.getTicket,
    error,
    isLoading,
  }
}
