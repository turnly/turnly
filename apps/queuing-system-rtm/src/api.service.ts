/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Consumers } from '@turnly/grpc'

/**
 * Queuing System Service
 */
export const Customers = new Consumers.QueuingSystem.Customers()

/**
 * Channels Service
 */
export const Widgets = new Consumers.Channels.Widgets()

export const setOrganizationId = (organizationId: string) => {
  Customers.destroyOrganizationId().setOrganizationId(organizationId)
  Widgets.destroyOrganizationId().setOrganizationId(organizationId)
}
