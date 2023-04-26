/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Extra } from '@turnly/common'
import { ConflictException } from '@turnly/observability'
import { ObjectMother } from '@turnly/testing'

import { TicketStatus } from '../../../../src/tickets/shared/domain/enums/TicketStatus'
import { TicketMother } from './ticket.entity.mother'

describe('tickets > domain > validates the min behavior in the life-cycle of a ticket', () => {
  it('should return the required attributes after ticket-instantiation', () => {
    const ticket = TicketMother.random()
    const expectedToHave = [
      'id',
      'status',
      'serviceId',
      'locationId',
      'customerId',
      'organizationId',
      /**
       * TODO: fix: when you create a ticket, you can't get created_at attribute
       * @see https://github.com/turnly/turnly/issues/12
       *
       * 'createdAt',
       */
    ]

    const attributes = ticket.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  describe('when the ticket is created', () => {
    it('should be in the available status', () => {
      const ticket = TicketMother.random()
      const { status } = ticket.toObject()

      expect(status).toBe(TicketStatus.AVAILABLE)
    })

    it('should register a creation event', () => {
      const ticket = TicketMother.random()
      const events = ticket.pull()

      expect(events).toHaveLength(1)

      const event = events[0]

      expect(event.getName()).toBe('ticket.created')
      expect(event.payload).toBeDefined()
    })
  })

  describe('when the ticket is cancelled', () => {
    it('should be in the CANCELLED status', () => {
      const ticket = TicketMother.inAvailableStatus()

      ticket.leave()

      const { status } = ticket.toObject()
      expect(status).toBe(TicketStatus.CANCELLED)
    })

    it('should register a cancel event', () => {
      const ticket = TicketMother.inAvailableStatus()

      ticket.leave()

      const events = ticket.pull()

      expect(events).toHaveLength(1)

      const event = events[0]

      expect(event.getName()).toBe('ticket.cancelled')
      expect(event.payload).toBeDefined()
    })
  })

  it('should be able to announce my arrival', () => {
    const ticket = TicketMother.inAvailableStatus()
    ticket.announce()

    const { status } = ticket.toObject()
    expect(status).toBe(TicketStatus.ANNOUNCED)
  })

  it('should be able to rate my ticket', () => {
    const ticket = TicketMother.inPendingForRatingStatus()
    ticket.addRating(TicketMother.randomRating())

    const events = ticket.pull()

    expect(events).toHaveLength(1)

    const event = events[0]

    expect(event.getName()).toBe('ticket.completed')
    expect(event.payload).toBeDefined()

    const { status } = ticket.toObject()
    expect(status).toBe(TicketStatus.SERVED_WITH_RATING)
  })

  it('should not be able to rate my ticket if it is not in a valid state', () => {
    const ticket = TicketMother.random()

    expect(() => ticket.addRating(TicketMother.randomRating())).toThrowError(
      ConflictException
    )

    const { status } = ticket.toObject()
    expect(status).not.toEqual(TicketStatus.SERVED_WITH_RATING)
  })

  it('should create a ticket with extra attributes', () => {
    const ticket = TicketMother.withExtra()

    const { extra } = ticket.toObject()

    expect(extra).toBeDefined()
    expect(extra?.length).toBeGreaterThan(0)

    const customAttribute = extra?.[0] as Extra

    expect(customAttribute).toHaveProperty('key')
    expect(customAttribute).toHaveProperty('value')
  })

  it('should get the value of the key in the extra', () => {
    const ticket = TicketMother.withStaticExtra()
    const value = ticket.getExtra('password')

    expect(value).toBeDefined()
  })

  it('should get null if the key is not in the extra', () => {
    const ticket = TicketMother.withStaticExtra()
    const value = ticket.getExtra('cellphone')

    expect(value).toBeNull()
  })

  describe('when the ticket is called', () => {
    it('should be in the ANNOUNCE status', () => {
      const ticket = TicketMother.inCalledStatus()

      ticket.call(ObjectMother.uuid('agt'))

      const { status } = ticket.toObject()
      expect(status).toBe(TicketStatus.CALLED)
    })
  })

  describe('when the ticket is re-called', () => {
    it('should be in the CALLED status', () => {
      const ticket = TicketMother.inRecalledStatus()

      ticket.call(ObjectMother.uuid('agt'))

      const { status } = ticket.toObject()
      expect(status).toBe(TicketStatus.RECALLED)
    })
  })
})
