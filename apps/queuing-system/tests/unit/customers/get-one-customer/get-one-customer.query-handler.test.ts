/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { GetOneCustomerQueryHandler } from '../../../../src/customers/get-one-customer'
import { CustomersReadableRepo } from '../shared/__mocks__/customers-readable.repo'
import { CustomerMother } from '../shared/domain/customer.entity.mother'
import { GetOneCustomerQueryMother } from './get-one-customer.query.mother'

let repository: CustomersReadableRepo
let handler: GetOneCustomerQueryHandler

describe('customers > queries > validates the expected behavior of GetOneCustomerQuery', () => {
  beforeEach(() => {
    repository = new CustomersReadableRepo()
    handler = new GetOneCustomerQueryHandler(repository)
  })

  it('should get an existing customer', async () => {
    const query = GetOneCustomerQueryMother.random()
    const customer = CustomerMother.fromExistingCustomerOnQuery(query)

    repository.attachGetOneResponse(customer)

    const response = await handler.execute(query)

    repository.assertGetOneHasBeenCalled()
    expect(response).toEqual(customer)
  })
})
