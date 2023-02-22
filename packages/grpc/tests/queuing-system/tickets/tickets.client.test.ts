/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Tickets } from '../../../src/consumers/queuing-system/tickets/tickets.client'
import { TicketsClient } from '../../../src/producers/queuing-system'
import { TestTicketsClient } from './__mocks__/test-tickets.client'
import { TicketsRequestMother } from './tickets-request.mother'
import { TicketsResponseMother } from './tickets-response.mother'

let tickets: Tickets
let client: TestTicketsClient

describe('consumers > tickets > validates the expected behavior of the TicketsClient', () => {
  beforeEach(() => {
    client = new TestTicketsClient()

    tickets = new Tickets({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as TicketsClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should create a ticket', async () => {
    const request = TicketsRequestMother.randomForCreate()
    const expected = TicketsResponseMother.randomForCreate()

    client.attachCreateResponse(expected)

    const response = await tickets.create(request)

    client.assertCreateHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in create ticket is empty', async () => {
    const request = TicketsRequestMother.randomForCreateEmpty()
    const expected = TicketsResponseMother.randomForCreateError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachCreateResponse(expected)

    const response = await tickets.create(request)

    client.assertCreateHasBeenCalled()
    expect(response.data).toBeUndefined
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })

  it('should get a ticket by id', async () => {
    const request = TicketsRequestMother.randomForGetOne()
    const expected = TicketsResponseMother.randomForGetOne()

    client.attachGetOneResponse(expected)

    const response = await tickets.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in get one ticket is empty', async () => {
    const request = TicketsRequestMother.randomForGetOneEmpty()
    const expected = TicketsResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachGetOneResponse(expected)

    const response = await tickets.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response.data).toBeUndefined
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })

  it('should announce a ticket', async () => {
    const request = TicketsRequestMother.randomForGetOne()
    const expected = TicketsResponseMother.randomForGetOne()

    client.attachAnnounceResponse(expected)

    const response = await tickets.announce(request)

    client.assertAnnounceHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in announce ticket is empty', async () => {
    const request = TicketsRequestMother.randomForGetOneEmpty()
    const expected = TicketsResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachAnnounceResponse(expected)

    const response = await tickets.announce(request)

    client.assertAnnounceHasBeenCalled()
    expect(response.data).toBeUndefined
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })

  it('should get an array of tickets before yours', async () => {
    const request = TicketsRequestMother.randomForGetOne()
    const expected = TicketsResponseMother.randomForGetBeforeYours()

    client.attachBeforeYoursResponse(expected)

    const response = await tickets.getTicketsBeforeYours(request)

    client.assertBeforeYoursHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in get ticket before yours is empty', async () => {
    const request = TicketsRequestMother.randomForGetOneEmpty()
    const expected = TicketsResponseMother.randomForGetBeforeYoursError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachBeforeYoursResponse(expected)

    const response = await tickets.getTicketsBeforeYours(request)

    client.assertBeforeYoursHasBeenCalled()
    expect(response.dataList).toHaveLength(0)
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })

  it('should get an array of tickets waiting for the service', async () => {
    const request = TicketsRequestMother.randomForGetWaitingForService()
    const expected = TicketsResponseMother.randomForGetWaitingForService()

    client.attachWaitingForServiceResponse(expected)

    const response = await tickets.getTicketsWaitingForService(request)

    client.assertWaitingForServiceHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request in get ticket waiting fot service is empty', async () => {
    const request = TicketsRequestMother.randomForGetWaitingForServiceEmpty()
    const expected = TicketsResponseMother.randomForGetWaitingForServiceError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachWaitingForServiceResponse(expected)

    const response = await tickets.getTicketsWaitingForService(request)

    client.assertWaitingForServiceHasBeenCalled()
    expect(response.dataList).toHaveLength(0)
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
