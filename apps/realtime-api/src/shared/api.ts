import { Consumers } from '@turnly/rpc'

/**
 * Queuing System Service
 */
export const Customers = new Consumers.QueuingSystem.Customers()

/**
 * Add-ons Service
 */
export const Integrations = new Consumers.Addons.Integrations()
