import { FieldsResolver } from './FieldsResolver'
import { LocationsResolver } from './LocationsResolver'
import { TicketsResolver } from './TicketsResolver'

export const resolvers = [
  TicketsResolver,
  LocationsResolver,
  FieldsResolver,
] as const
