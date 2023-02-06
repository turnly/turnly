/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers } from '@turnly/rpc'

/**
 * Branch Management Service
 */
export const Locations = new Consumers.BranchManagement.Locations()
export const Services = new Consumers.BranchManagement.Services()

/**
 * Business Data Fields Service
 */
export const Answers = new Consumers.BusinessDataFields.Answers()
export const Fields = new Consumers.BusinessDataFields.Fields()

/**
 * Queuing System Service
 */
export const Customers = new Consumers.QueuingSystem.Customers()
export const Tickets = new Consumers.QueuingSystem.Tickets()

/**
 * Add-ons Service
 */
// export const Widgets = new Consumers.Channels.Widgets()

export const setOrganizationId = (organizationId: string) => {
  Locations.destroyOrganizationId().setOrganizationId(organizationId)
  Services.destroyOrganizationId().setOrganizationId(organizationId)
  Answers.destroyOrganizationId().setOrganizationId(organizationId)
  Fields.destroyOrganizationId().setOrganizationId(organizationId)
  Customers.destroyOrganizationId().setOrganizationId(organizationId)
  Tickets.destroyOrganizationId().setOrganizationId(organizationId)
  // Widgets.destroyOrganizationId().setOrganizationId(organizationId)
}
