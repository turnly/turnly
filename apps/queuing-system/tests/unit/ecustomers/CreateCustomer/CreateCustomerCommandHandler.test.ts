/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { TestEventBus } from '@turnly/testing'

import { CreateCustomerCommandHandler } from '../../../../src/ecustomers/CreateCustomer'
import { CustomersWritableRepo } from '../eshared/__mocks__/CustomersWritableRepo'
import { CreateCustomerCommandMother } from './CreateCustomerCommandMother'

let repository: CustomersWritableRepo
let eventBus: TestEventBus
let handler: CreateCustomerCommandHandler

describe('customers > commands > validates the expected behavior on customer creation', () => {
  beforeEach(() => {
    eventBus = new TestEventBus()
    repository = new CustomersWritableRepo()
    handler = new CreateCustomerCommandHandler(eventBus, repository)
  })

  it('should create a customer', async () => {
    const command = CreateCustomerCommandMother.random()
    const customer = await handler.execute(command)

    repository.assertLastSavedIs(customer)
    eventBus.assertPublishCalled()
  })
})
