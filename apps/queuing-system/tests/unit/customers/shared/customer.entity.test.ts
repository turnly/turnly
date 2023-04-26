/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra } from '@turnly/common'

import { CustomerMother } from './customer.entity.mother'

describe('customers > domain > validates the min behavior in the life-cycle of a customer', () => {
  it('should return the required attributes after customer-instantiation', () => {
    const customer = CustomerMother.random()
    const expectedToHave = [
      'id',
      'name',
      'lastname',
      'phone',
      'country',
      'organizationId',
    ]

    const attributes = customer.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  describe('when the customer is created', () => {
    it('should register a creation event', () => {
      const customer = CustomerMother.random()
      const events = customer.pull()

      expect(events).toHaveLength(1)

      const event = events[0]

      expect(event.getName()).toBe('customer.created')
      expect(event.payload).toBeDefined()
    })
  })

  it('should create a customer with extra attributes', () => {
    const customer = CustomerMother.withExtra()

    const { extra } = customer.toObject()

    expect(extra).toBeDefined()
    expect(extra?.length).toBeGreaterThan(0)

    const customAttribute = extra?.[0] as Extra

    expect(customAttribute).toHaveProperty('key')
    expect(customAttribute).toHaveProperty('value')
  })
})
