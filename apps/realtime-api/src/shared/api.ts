/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
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
