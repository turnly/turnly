import { Consumers } from '@turnly/rpc'

/**
 * Alfred Service
 */
export const Locations = new Consumers.Alfred.Locations()
export const Services = new Consumers.Alfred.Services()

/**
 * Dorothee Service
 */
export const Answers = new Consumers.Dorothee.Answers()
export const Fields = new Consumers.Dorothee.Fields()

/**
 * Shannon Service
 */
export const Agents = new Consumers.Shannon.Agents()

/**
 * Sherley Service
 */
export const Customers = new Consumers.Sherley.Customers()
export const Tickets = new Consumers.Sherley.Tickets()

/**
 * Maverick Service
 */
export const Integrations = new Consumers.Maverick.Integrations()
