import { Nullable } from './shared'

export interface Session {
  customer: {
    id: string
    name: string
    email?: Nullable<string>
  }
  widget: {
    id: string
    name: string
    canCustomize: boolean
  }
  organizationId: string
}
