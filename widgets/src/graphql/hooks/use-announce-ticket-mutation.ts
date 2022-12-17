import { Notifier } from '../../components/notification'
import {
  TicketModel as Input,
  useAnnounceTicketMutation as useMutation,
} from '../generated/graphql'

export const useAnnounceTicket = () => {
  const [announceTicket, { error, loading: isLoading, data }] = useMutation({
    onError: error => Notifier.error(error.message),
  })

  return {
    data: data?.announceTicket,
    error,
    isLoading,
    announceCurrentTicket: async (ticketId: Input['id']) => {
      const { data } = await announceTicket({
        variables: { ticketId },
      })

      return data?.announceTicket
    },
  }
}
