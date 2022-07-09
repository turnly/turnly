/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { ConflictException, InvalidStateException } from '@turnly/common'

import { TicketStatus } from '../../../../src/Tickets/domain/enums/TicketStatus'
import { TicketMother } from './TicketMother'

describe('tickets > validates the min behavior in the life-cycle of a ticket', () => {
  it('should return the required attributes after ticket-instantiation', () => {
    const ticket = TicketMother.random()
    const expectedToHave = [
      'id',
      'status',
      'serviceId',
      'locationId',
      'customerId',
      'organizationId',
      'createdAt',
    ]

    const attributes = ticket.toObject()

    for (const attr of expectedToHave) {
      expect(attributes[attr]).toBeDefined()
    }
  })

  describe('when the ticket is created', () => {
    it('should be in the BOOKED status', () => {
      const ticket = TicketMother.random()
      const { status } = ticket.toObject()

      expect(status).toBe(TicketStatus.BOOKED)
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

  it('should not be able to announce my arrival if I am not in the AVAILABLE status', () => {
    const ticket = TicketMother.random()

    expect(() => ticket.announce()).toThrowError(InvalidStateException)

    const { status } = ticket.toObject()
    expect(status).not.toEqual(TicketStatus.ANNOUNCED)
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
    expect(status).toBe(TicketStatus.COMPLETED_WITH_RATING)
  })

  it('should not be able to rate my ticket if it is not in a valid state', () => {
    const ticket = TicketMother.random()

    expect(() => ticket.addRating(TicketMother.randomRating())).toThrowError(
      ConflictException
    )

    const { status } = ticket.toObject()
    expect(status).not.toEqual(TicketStatus.COMPLETED_WITH_RATING)
  })
})
