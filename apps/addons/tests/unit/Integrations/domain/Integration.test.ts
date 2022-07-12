/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IntegrationMother } from './IntegrationMother'

describe('integrations > domain > validates the min behavior in the life-cycle of a integration', () => {
  it('should return the required attributes after integration-instantiation', () => {
    const integration = IntegrationMother.random()
    const expectedToHave = ['id', 'name', 'status', 'origins', 'organizationId']

    const attributes = integration.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  describe('when the integration is created', () => {
    it('should register a creation event', () => {
      const integration = IntegrationMother.random()
      const events = integration.pull()

      expect(events).toHaveLength(1)

      const event = events[0]

      expect(event.getName()).toBe('integration.created')
      expect(event.payload).toBeDefined()
    })
  })
})
