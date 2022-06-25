import { FieldsResolver } from './FieldsResolver'
import { LocationsResolver } from './LocationsResolver'
import { ServicesResolver } from './ServicesResolver'
import { TicketsResolver } from './TicketsResolver'

export const resolvers = [
  TicketsResolver,
  LocationsResolver,
  FieldsResolver,
  ServicesResolver,
] as const
