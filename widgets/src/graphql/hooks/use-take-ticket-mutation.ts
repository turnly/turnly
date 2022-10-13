import { Notifier } from '../../components/notification'
import {
  TicketInput as Input,
  useTakeTicketMutation as useMutation,
} from '../generated/graphql'

export const useTakeTicketMutation = () => {
  const [takeTicket, { error, loading: isLoading, data }] = useMutation({
    onError: error => Notifier.error(error.message),
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
