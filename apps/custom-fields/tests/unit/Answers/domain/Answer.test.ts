/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { Extra } from '@turnly/common'

import { AnswerMother } from './AnswerMother'

describe('answers > domain > validates the min behavior in the life-cycle of a answer', () => {
  it('should return the required attributes after answer-instantiation', () => {
    const answer = AnswerMother.random()
    const expectedToHave = [
      'value',
      'fieldId',
      'entityId',
      'entityType',
      'organizationId',
    ]

    const attributes = answer.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  it('should register a creation event when the answer is created', () => {
    const answer = AnswerMother.random()
    const events = answer.pull()

    expect(events).toHaveLength(1)

    const event = events[0]

    expect(event.getName()).toBe('answer.created')
    expect(event.payload).toBeDefined()
  })

  it('should create an answer with extra attributes', () => {
    const answer = AnswerMother.withExtra()

    const { extra } = answer.toObject()

    expect(extra).toBeDefined()
    expect(extra?.length).toBeGreaterThan(0)

    const customAttribute = extra?.[0] as Extra

    expect(customAttribute).toHaveProperty('key')
    expect(customAttribute).toHaveProperty('value')
  })
})
