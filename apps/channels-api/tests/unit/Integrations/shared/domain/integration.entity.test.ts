/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IntegrationMother } from './integration.entity.mother'

describe('integrations > domain > validates the min behavior in the life-cycle of a integration', () => {
  it('should return the required attributes after integration-instantiation', () => {
    const integration = IntegrationMother.random()
    const expectedToHave = ['id', 'name', 'status', 'origins', 'organizationId']

    const attributes = integration.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  it('should register a creation event when the integration is created', () => {
    const integration = IntegrationMother.random()
    const events = integration.pull()

    expect(events).toHaveLength(1)

    const event = events[0]

    expect(event.getName()).toBe('integration.created')
    expect(event.payload).toBeDefined()
  })
})
