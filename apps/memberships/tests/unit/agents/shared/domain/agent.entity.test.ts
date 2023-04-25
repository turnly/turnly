/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra } from '@turnly/common'

import { AgentMother } from './agent.entity.mother'

describe('agents > domain > validates the min behavior in the life-cycle of a agent', () => {
  it('should return the required attributes after agent-instantiation', () => {
    const agent = AgentMother.random()
    const expectedToHave = [
      'id',
      'name',
      'lastname',
      'locationId',
      'organizationId',
    ]

    const attributes = agent.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  describe('when the agent is created', () => {
    it('should register a creation event', () => {
      const agent = AgentMother.random()
      const events = agent.pull()

      expect(events).toHaveLength(1)

      const event = events[0]

      expect(event.getName()).toBe('agent.created')
      expect(event.payload).toBeDefined()
    })

    it('should create an agent with extra attributes', () => {
      const agent = AgentMother.withExtra()

      const { extra } = agent.toObject()

      expect(extra).toBeDefined()
      expect(extra?.length).toBeGreaterThan(0)

      const customAttribute = extra?.[0] as Extra

      expect(customAttribute).toHaveProperty('key')
      expect(customAttribute).toHaveProperty('value')
    })
  })
})
