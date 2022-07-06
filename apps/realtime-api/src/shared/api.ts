/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Consumers } from '@turnly/rpc'

/**
 * Queuing System Service
 */
export const Customers = new Consumers.QueuingSystem.Customers()

/**
 * Add-ons Service
 */
export const Integrations = new Consumers.Addons.Integrations()
