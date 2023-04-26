/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../../src/locations/shared/register.dependency'

import { MongoEnvironmentArranger } from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'

import { LocationsModule } from '../../../../../../src/locations/locations.module'
import { LocationMother } from '../../../../../unit/locations/shared/domain/location.entity.mother'
import { LocationsQueryMother } from './locations-query.mother'

const writableRepo = LocationsModule.getWritableRepo()
const readableRepo = LocationsModule.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('locations > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random location to mongo database', async () => {
    const location = LocationMother.random()

    await writableRepo.save(location)
  })

  it('should persist multiple locations using bulk insert to mongo database', async () => {
    const locations = LocationMother.collection()

    await writableRepo.save(locations)
  })

  it('should retrieve an existing location using getOne()', async () => {
    const location = LocationMother.random()

    await writableRepo.save(location)

    const persisted = await readableRepo.getOne(
      LocationsQueryMother.getOneWith(location)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = location.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple locations using find()', async () => {
    const locations = LocationMother.collection()

    await writableRepo.save(locations)

    const persisted = await readableRepo.find(
      LocationsQueryMother.getManyIn(locations)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(locations.length)
  })

  it('should not retrieve a non-existing location using getOne()', async () => {
    const location = await readableRepo.getOne(
      LocationsQueryMother.getOneWith(LocationMother.random())
    )

    expect(location).toBeNull()
  })
})
