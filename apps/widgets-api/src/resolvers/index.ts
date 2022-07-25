/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
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
