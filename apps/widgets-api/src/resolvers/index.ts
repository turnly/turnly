/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { FieldsResolver } from './fields.resolver'
import { LocationsResolver } from './locations.resolver'
import { ServicesResolver } from './services.resolver'
import { TicketsResolver } from './tickets.resolver'

export const resolvers = [
  TicketsResolver,
  LocationsResolver,
  FieldsResolver,
  ServicesResolver,
] as const
