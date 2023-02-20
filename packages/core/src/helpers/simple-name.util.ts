/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Format name to simple name.
 *
 * @example
 * formatToSimpleName('LocationCreatedEvent') // 'location.created'
 */
export const formatToSimpleName = (name: string) =>
  name
    .trim()
    .split(/(?=[A-Z])/)
    .map(word => word.trim().toLowerCase())
    .join('.')
    .replace('.event', '')
