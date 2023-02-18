/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CustomerByIdQueryHandler } from '../../../../src/ecustomers/CustomerById'
import { CustomersReadableRepo } from '../eshared/__mocks__/CustomersReadableRepo'
import { CustomerMother } from '../eshared/domain/CustomerMother'
import { CustomerByIdQueryMother } from './CustomerByIdQueryMother'

let repository: CustomersReadableRepo
let handler: CustomerByIdQueryHandler

describe('customers > queries > validates the expected behavior of CustomerByIdQuery', () => {
  beforeEach(() => {
    repository = new CustomersReadableRepo()
    handler = new CustomerByIdQueryHandler(repository)
  })

  it('should get an existing customer', async () => {
    const query = CustomerByIdQueryMother.random()
    const customer = CustomerMother.fromExistingCustomerOnQuery(query)

    repository.attachGetOneResponse(customer)

    const response = await handler.execute(query)

    repository.assertGetOneHasBeenCalled()
    expect(response).toEqual(customer)
  })
})
