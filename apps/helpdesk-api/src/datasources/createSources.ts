/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CustomersDataSource,
  FieldsDataSource,
  IntegrationsDataSource,
  LocationsDataSource,
  ServicesDataSource,
  TicketsDataSource,
} from '.'

export type Sources = ReturnType<typeof createSources>

export const createSources = () => ({
  fields: new FieldsDataSource(),
  customers: new CustomersDataSource(),
  locations: new LocationsDataSource(),
  integrations: new IntegrationsDataSource(),
  services: new ServicesDataSource(),
  tickets: new TicketsDataSource(),
})
