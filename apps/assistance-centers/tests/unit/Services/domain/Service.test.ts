/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ServiceMother } from './ServiceMother'

describe('services > domain > validates the min behavior in the life-cycle of a service', () => {
  it('should return the required attributes after service-instantiation', () => {
    const service = ServiceMother.random()
    const expectedToHave = [
      'id',
      'name',
      'description',
      'locationId',
      'organizationId',
    ]

    const attributes = service.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  it('should register a creation event when the service is created', () => {
    const service = ServiceMother.random()
    const events = service.pull()

    expect(events).toHaveLength(1)

    const event = events[0]

    expect(event.getName()).toBe('service.created')
    expect(event.payload).toBeDefined()
  })
})
