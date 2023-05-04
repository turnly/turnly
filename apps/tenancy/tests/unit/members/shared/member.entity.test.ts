/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra } from '@turnly/common'

import { MemberMother } from './member.entity.mother'

describe('members > domain > validates the min behavior in the life-cycle of a member', () => {
  it('should return the required attributes after member-instantiation', () => {
    const member = MemberMother.random()
    const expectedToHave = [
      'id',
      'name',
      'lastname',
      'locationId',
      'organizationId',
    ]

    const attributes = member.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  describe('when the member is created', () => {
    it('should register a creation event', () => {
      const member = MemberMother.random()
      const events = member.pull()

      expect(events).toHaveLength(1)

      const event = events[0]

      expect(event.getName()).toBe('member.created')
      expect(event.payload).toBeDefined()
    })

    it('should create an member with extra attributes', () => {
      const member = MemberMother.withExtra()

      const { extra } = member.toObject()

      expect(extra).toBeDefined()
      expect(extra?.length).toBeGreaterThan(0)

      const customAttribute = extra?.[0] as Extra

      expect(customAttribute).toHaveProperty('key')
      expect(customAttribute).toHaveProperty('value')
    })
  })
})
