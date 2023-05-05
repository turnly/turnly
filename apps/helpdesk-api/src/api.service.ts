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
 * Members Service
 */
export const Members = new Consumers.Tenancy.Members()

/**
 * Queuing System Service
 */
export const Customers = new Consumers.QueuingSystem.Customers()
export const Tickets = new Consumers.QueuingSystem.Tickets()

export const setOrganizationId = (organizationId: string) => {
  Locations.destroyOrganizationId().setOrganizationId(organizationId)
  Services.destroyOrganizationId().setOrganizationId(organizationId)
  Answers.destroyOrganizationId().setOrganizationId(organizationId)
  Fields.destroyOrganizationId().setOrganizationId(organizationId)
  Members.destroyOrganizationId().setOrganizationId(organizationId)
  Customers.destroyOrganizationId().setOrganizationId(organizationId)
  Tickets.destroyOrganizationId().setOrganizationId(organizationId)
}
