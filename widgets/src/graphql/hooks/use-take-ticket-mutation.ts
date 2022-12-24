import {
  TicketInput as Input,
  useTakeTicketMutation as useMutation,
} from '../generated/graphql'
import { onErrorHandler } from './on-error-handler'

export const useTakeTicketMutation = () => {
  const [takeTicket, { error, loading: isLoading, data }] = useMutation({
    onError: onErrorHandler,
  })

  return {
    data: data?.takeTicket,
    error,
    isLoading,
    takeNewTicket: async (input: Input) => {
      const { data } = await takeTicket({
        variables: { input },
      })

      return data?.takeTicket
    },
  }
}
