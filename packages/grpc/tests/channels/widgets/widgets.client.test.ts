/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { Widgets } from '../../../src/consumers/channels/widgets/widgets.client'
import { WidgetsClient } from '../../../src/producers/channels'
import { TestWidgetsClient } from './__mocks__/test-widgets.client'
import { WidgetsRequestMother } from './widgets-request.mother'
import { WidgetsResponseMother } from './widgets-response.mother'

let widgets: Widgets
let client: TestWidgetsClient

describe('consumers > widgets > validates the expected behavior of the WidgetsClient', () => {
  beforeEach(() => {
    client = new TestWidgetsClient()

    widgets = new Widgets({ address: '0.0.0.0:50052' })
      .setInternalClient(client as unknown as WidgetsClient)
      .setOrganizationId(ObjectMother.uuid('org'))
  })

  it('should get an existing widget', async () => {
    const request = WidgetsRequestMother.randomForGetOne()
    const expected = WidgetsResponseMother.randomForGetOne()

    client.attachGetOneResponse(expected)

    const response = await widgets.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response).toEqual(expected.toObject())
  })

  it('should throw a BAD_REQUEST error when the request is empty', async () => {
    const request = WidgetsRequestMother.randomForGetOneEmpty()
    const expected = WidgetsResponseMother.randomForGetOneError(
      ResponseCodes.BAD_REQUEST
    )

    client.attachGetOneResponse(expected)

    const response = await widgets.getOne(request)

    client.assertGetOneHasBeenCalled()
    expect(response.data).toBeUndefined()
    expect(response.meta?.status).toEqual(ResponseCodes.BAD_REQUEST)
  })
})
