import Cookie from 'js-cookie'
import { StateStorage } from 'zustand/middleware'

export const Cookies: StateStorage = {
  getItem: (name: string) => Cookie.get(name) ?? null,
  setItem: (name: string, value: string) => {
    Cookie.set(name, value)
  },
  removeItem: (name: string) => Cookie.remove(name),
}
