import { useCallback } from 'preact/hooks'
import create from 'zustand'
import shallow from 'zustand/shallow'

import { Nullable } from '../@types/shared'
import { ServiceParams } from '../components/services'

type Service = Nullable<ServiceParams>
type Answer = {
  fieldId: string
  value: string
}
type Ticket = {
  beforeYours: number
  calledToDesk?: string
  customerId: string
  displayCode: string
  id: string
  status: string
}

interface State {
  service: Service
  answers: Answer[]
  ticket: Nullable<Ticket>
  setService: (service: Service) => void
  setAnswers: (answers: Answer[]) => void
  setTicket: (tiket: Ticket) => void
  resetInternalState: () => void
}

const useStore = create<State>(set => ({
  service: null,
  answers: [],
  ticket: null,
  setService: service => set(() => ({ service })),
  setAnswers: answers => set(() => ({ answers })),
  setTicket: ticket => set(() => ({ ticket })),
  resetInternalState: () => set(() => ({ service: null })),
}))

export const useInternalState = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
