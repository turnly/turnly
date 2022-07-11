/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { TestEventBus } from '@turnly/testing'

import { CreateCustomerCommandHandler } from '../../../../../../src/Customers/application/commands/CreateCustomerCommand'
import { CustomersWritableRepo } from '../../../__mocks__/CustomersWritableRepo'
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
