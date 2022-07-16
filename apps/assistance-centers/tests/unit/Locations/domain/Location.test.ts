/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { LocationMother } from './LocationMother'

describe('locations > domain > validates the min behavior in the life-cycle of a location', () => {
  it('should return the required attributes after location-instantiation', () => {
    const location = LocationMother.random()
    const expectedToHave = [
      'id',
      'name',
      'address',
      'coordinates',
      'country',
      'stopServingBeforeInMinutes',
      'organizationId',
    ]

    const attributes = location.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  it('should register a creation event when the location is created', () => {
    const location = LocationMother.random()
    const events = location.pull()

    expect(events).toHaveLength(1)

    const event = events[0]

    expect(event.getName()).toBe('location.created')
    expect(event.payload).toBeDefined()
  })
})
