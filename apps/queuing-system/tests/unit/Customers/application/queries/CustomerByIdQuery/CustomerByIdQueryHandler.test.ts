/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { CustomerByIdQueryHandler } from '../../../../../../src/Customers/application/queries/CustomerByIdQuery'
import { CustomersReadableRepo } from '../../../__mocks__/CustomersReadableRepo'
import { CustomerMother } from '../../../domain/CustomerMother'
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
