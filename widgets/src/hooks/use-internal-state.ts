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

interface State {
  service: Service
  answers: Answer[]
  setService: (service: Service) => void
  setAnswers: (answers: Answer[]) => void
  resetInternalState: () => void
}

const useStore = create<State>(set => ({
  service: null,
  answers: [],
  setService: service => set(() => ({ service })),
  setAnswers: answers => set(() => ({ answers })),
  resetInternalState: () => set(() => ({ service: null })),
}))

export const useInternalState = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
