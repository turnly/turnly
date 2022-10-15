import { Notifier } from '../../components/notification'
import {
  TicketModel as Input,
  useLeaveTicketMutation as useMutation,
} from '../generated/graphql'

export const useLeaveTicket = () => {
  const [leaveTicket, { error, loading: isLoading, data }] = useMutation({
    onError: error => Notifier.error(error.message),
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
