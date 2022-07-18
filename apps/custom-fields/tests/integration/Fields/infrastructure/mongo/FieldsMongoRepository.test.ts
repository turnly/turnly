/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import '../../../../../src/Fields/infrastructure/register-dependencies/dependencies'

import { ResourceNotFoundException } from '@turnly/common'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { FieldsFactory } from '../../../../../src/Fields/infrastructure/factories/FieldsFactory'
import { FieldMother } from '../../../../unit/Fields/domain/FieldMother'
import { FieldsQueryMother } from './FieldsQueryMother'

const writableRepo = FieldsFactory.getWritableRepo()
const readableRepo = FieldsFactory.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('fields > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random field to mongo database', async () => {
    const field = FieldMother.random()

    await writableRepo.save(field)
  })

  it('should persist multiple fields using bulk insert to mongo database', async () => {
    const fields = FieldMother.collection()

    await writableRepo.save(fields)
  })

  it('should retrieve a existing field using getOne()', async () => {
    const field = FieldMother.random()

    await writableRepo.save(field)

    const persisted = await readableRepo.getOne(
      FieldsQueryMother.getOneWith(field)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = field.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple fields using find()', async () => {
    const fields = FieldMother.collection()

    await writableRepo.save(fields)

    const persisted = await readableRepo.find(
      FieldsQueryMother.getManyIn(fields)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(fields.length)
  })

  it('should not retrieve a non-existing field using getOne()', async () => {
    const field = await readableRepo.getOne(
      FieldsQueryMother.getOneWith(FieldMother.random())
    )

    expect(field).toBeNull()
  })
})
