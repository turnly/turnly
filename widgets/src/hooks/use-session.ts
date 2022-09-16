import { useCallback } from 'preact/hooks'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import shallow from 'zustand/shallow'

import { Session } from '../@types/session'
import { Cookies } from '../libs/cookies'

interface SessionStore extends Session {
  setSession: (value: Partial<Session>) => void
}

const useStore = create<SessionStore>()(
  persist(
    immer(set => ({
      customer: {
        id: '',
        name: '',
        email: null,
      },
      widget: {
        id: '',
        name: '',
        canCustomize: false,
      },
      organizationId: '',
      setSession(values) {
        set((state: Session) => {
          for (const key in values) {
            if (Object.prototype.hasOwnProperty.call(state, key)) {
              state[key] = values[key]
            }
          }
        })
      },
    })),
    {
      name: 'tly.widget.session',
      version: 1,
      getStorage: () => Cookies,
    }
  )
)

export const useSession = () =>
  useStore(
    useCallback(s => s, []),
    shallow
  )
