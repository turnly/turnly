import {
  TicketModel as Input,
  useLeaveTicketMutation as useMutation,
} from '../generated/graphql'
import { onErrorHandler } from './on-error-handler'

export const useLeaveTicket = () => {
  const [leaveTicket, { error, loading: isLoading, data }] = useMutation({
    onError: onErrorHandler,
  })

  return {
    data: data?.leaveTicket,
    error,
    isLoading,
    leaveCurrentTicket: async (ticketId: Input['id']) => {
      const { data } = await leaveTicket({
        variables: { ticketId },
      })

      return data?.leaveTicket
    },
  }
}
