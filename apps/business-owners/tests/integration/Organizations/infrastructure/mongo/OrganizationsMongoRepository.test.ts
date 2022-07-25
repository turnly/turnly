/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../src/Organizations/infrastructure/register-dependencies/dependencies'

import { ResourceNotFoundException } from '@turnly/common'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { OrganizationsFactory } from '../../../../../src/Organizations/infrastructure/factories/OrganizationsFactory'
import { OrganizationMother } from '../../../../unit/Organizations/domain/OrganizationMother'
import { OrganizationsQueryMother } from './OrganizationsQueryMother'

const writableRepo = OrganizationsFactory.getWritableRepo()
const readableRepo = OrganizationsFactory.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('organizations > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random organization to mongo database', async () => {
    const organization = OrganizationMother.random()

    await writableRepo.save(organization)
  })

  it('should persist multiple organizations using bulk insert to mongo database', async () => {
    const organizations = OrganizationMother.collection(2)

    await writableRepo.save(organizations)
  })

  it('should retrieve an existing organization using getOne()', async () => {
    const organization = OrganizationMother.random()

    await writableRepo.save(organization)

    const persisted = await readableRepo.getOne(
      OrganizationsQueryMother.getOneWith(organization)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = organization.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple organizations using find()', async () => {
    const organizations = OrganizationMother.collection(2)

    await writableRepo.save(organizations)

    const persisted = await readableRepo.find(
      OrganizationsQueryMother.getManyIn(organizations)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(organizations.length)
  })

  it('should not retrieve a non-existing organization using getOne()', async () => {
    const organization = await readableRepo.getOne(
      OrganizationsQueryMother.getOneWith(OrganizationMother.random())
    )

    expect(organization).toBeNull()
  })
})
