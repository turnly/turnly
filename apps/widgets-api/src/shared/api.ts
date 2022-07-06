/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Consumers } from '@turnly/rpc'

/**
 * Assistance Centers Service
 */
export const Locations = new Consumers.AssistanceCenters.Locations()
export const Services = new Consumers.AssistanceCenters.Services()

/**
 * Custom Fields Service
 */
export const Answers = new Consumers.CustomFields.Answers()
export const Fields = new Consumers.CustomFields.Fields()

/**
 * Teams Service
 */
export const Agents = new Consumers.Teams.Agents()

/**
 * Queuing System Service
 */
export const Customers = new Consumers.QueuingSystem.Customers()
export const Tickets = new Consumers.QueuingSystem.Tickets()

/**
 * Add-ons Service
 */
export const Integrations = new Consumers.Addons.Integrations()
