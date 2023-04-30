/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  AnswersDataSource,
  CustomersDataSource,
  FieldsDataSource,
  LocationsDataSource,
  ServicesDataSource,
  TicketsDataSource,
} from '.'

export type Sources = ReturnType<typeof createSources>

export const createSources = () => ({
  fields: new FieldsDataSource(),
  customers: new CustomersDataSource(),
  locations: new LocationsDataSource(),
  services: new ServicesDataSource(),
  tickets: new TicketsDataSource(),
  answers: new AnswersDataSource(),
})
