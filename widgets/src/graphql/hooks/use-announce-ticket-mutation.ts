import {
  TicketModel as Input,
  useAnnounceTicketMutation as useMutation,
} from '../generated/graphql'
import { onErrorHandler } from './on-error-handler'

export const useAnnounceTicket = () => {
  const [announceTicket, { error, loading: isLoading, data }] = useMutation({
    onError: onErrorHandler,
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
