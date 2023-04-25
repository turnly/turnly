/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers } from '@turnly/grpc'

/**
 * Assistance Centers Service
 */
export const Locations = new Consumers.BranchManagement.Locations()
export const Services = new Consumers.BranchManagement.Services()

/**
 * Custom Fields Service
 */
export const Answers = new Consumers.BusinessDataFields.Answers()
export const Fields = new Consumers.BusinessDataFields.Fields()

/**
 * Memberships Service
 */
export const Agents = new Consumers.Memberships.Agents()

/**
 * Queuing System Service
 */
export const Customers = new Consumers.QueuingSystem.Customers()
export const Tickets = new Consumers.QueuingSystem.Tickets()

/**
 * Channels Service
 */
export const Integrations = new Consumers.Channels.Widgets()

export const setOrganizationId = (organizationId: string) => {
  Locations.destroyOrganizationId().setOrganizationId(organizationId)
  Services.destroyOrganizationId().setOrganizationId(organizationId)
  Answers.destroyOrganizationId().setOrganizationId(organizationId)
  Fields.destroyOrganizationId().setOrganizationId(organizationId)
  Agents.destroyOrganizationId().setOrganizationId(organizationId)
  Customers.destroyOrganizationId().setOrganizationId(organizationId)
  Tickets.destroyOrganizationId().setOrganizationId(organizationId)
  Integrations.destroyOrganizationId().setOrganizationId(organizationId)
}
