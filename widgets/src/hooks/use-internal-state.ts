import { useCallback } from 'preact/hooks'
import create from 'zustand'
import shallow from 'zustand/shallow'

import { Nullable } from '../@types/shared'
import { ServiceParams } from '../components/services'

export type Service = Nullable<ServiceParams>

export type Answer = {
  fieldId: string
  value: string
}

export enum TicketStatus {
  BOOKED = 'booked',
  AVIABLE = 'aviable',
  ANNOUNCED = 'announced',
  CALLED = 'called',
  RECALLED = 'recalled',
  CANCELLED = 'canceled',
  DISCARDED = 'discarded',
  INACTIVE = 'inactive',
  RETURNED = 'returned',
  REMOVED = 'removed',
  SERVED = 'served',
  SERVED_WITH_RATING = 'server_with_rating',
}

export type Ticket = {
  beforeYours: number
  calledToDesk?: string | null
  customerId: string
  displayCode: string
  id: string
  status: TicketStatus
}

interface State {
  service: Service
  answers: Answer[]
  ticket: Nullable<Ticket>
  setService: (service: Service) => void
  setAnswers: (answers: Answer[]) => void
  setTicket: (tiket: Nullable<Ticket>) => void
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
