/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../../src/customers/shared/infrastructure/dependency/register-dependencies'

import { ResourceNotFoundException } from '@turnly/common'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { CustomersModule } from '../../../../../../src/customers/customers.module'
import { CustomerMother } from '../../../../../unit/customers/shared/domain/customer.entity.mother'
import { CustomersQueryMother } from './customers.query.mother'

const writableRepo = CustomersModule.getWritableRepo()
const readableRepo = CustomersModule.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('customers > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random customer to mongo database', async () => {
    const customer = CustomerMother.random()

    await writableRepo.save(customer)
  })

  it('should persist multiple customers using bulk insert to mongo database', async () => {
    const customers = CustomerMother.collection()

    await writableRepo.save(customers)
  })

  it('should retrieve an existing customer using getOne()', async () => {
    const customer = CustomerMother.random()

    await writableRepo.save(customer)

    const persisted = await readableRepo.getOne(
      CustomersQueryMother.getOneWith(customer)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = customer.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple customers using find()', async () => {
    const customers = CustomerMother.collection()

    await writableRepo.save(customers)

    const persisted = await readableRepo.find(
      CustomersQueryMother.getManyIn(customers)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(customers.length)
  })

  it('should not retrieve a non-existing customer using getOne()', async () => {
    const customer = await readableRepo.getOne(
      CustomersQueryMother.getOneWith(CustomerMother.random())
    )

    expect(customer).toBeNull()
  })
})
