/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../../src/services/shared/dependency/register-dependencies'

import { ResourceNotFoundException } from '@turnly/common'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { ServicesModule } from '../../../../../../src/services/services.module'
import { ServiceMother } from '../../../../../unit/services/shared/domain/service.entity.mother'
import { ServicesQueryMother } from './services-query.mother'

const writableRepo = ServicesModule.getWritableRepo()
const readableRepo = ServicesModule.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('services > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random service to mongo database', async () => {
    const service = ServiceMother.random()

    await writableRepo.save(service)
  })

  it('should persist multiple services using bulk insert to mongo database', async () => {
    const services = ServiceMother.collection()

    await writableRepo.save(services)
  })

  it('should retrieve a existing service using getOne()', async () => {
    const service = ServiceMother.random()

    await writableRepo.save(service)

    const persisted = await readableRepo.getOne(
      ServicesQueryMother.getOneWith(service)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = service.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple services using find()', async () => {
    const services = ServiceMother.collection()

    await writableRepo.save(services)

    const persisted = await readableRepo.find(
      ServicesQueryMother.getManyIn(services)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(services.length)
  })

  it('should not retrieve a non-existing service using getOne()', async () => {
    const service = await readableRepo.getOne(
      ServicesQueryMother.getOneWith(ServiceMother.random())
    )

    expect(service).toBeNull()
  })
})
