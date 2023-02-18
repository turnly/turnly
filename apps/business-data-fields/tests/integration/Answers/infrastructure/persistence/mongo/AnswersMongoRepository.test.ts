/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../src/Answers/infrastructure/register-dependencies/dependencies'

import { ResourceNotFoundException } from '@turnly/common'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { AnswersModule } from '../../../../../../src/Answers/answers.module'
import { AnswerMother } from '../../../../../unit/Answers/Shared/domain/AnswerMother'
import { AnswersQueryMother } from './AnswersQueryMother'

const writableRepo = AnswersModule.getWritableRepo()
const readableRepo = AnswersModule.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('answers > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random answer to mongo database', async () => {
    const answer = AnswerMother.random()

    await writableRepo.save(answer)
  })

  it('should persist multiple answers using bulk insert to mongo database', async () => {
    const answers = AnswerMother.collection()

    await writableRepo.save(answers)
  })

  it('should retrieve an existing answer using getOne()', async () => {
    const answer = AnswerMother.random()

    await writableRepo.save(answer)

    const persisted = await readableRepo.getOne(
      AnswersQueryMother.getOneWith(answer)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = answer.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple answers using find()', async () => {
    const answers = AnswerMother.collection(10)

    await writableRepo.save(answers)

    const persisted = await readableRepo.find(
      AnswersQueryMother.getManyIn(answers)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(answers.length)
  })

  it('should not retrieve a non-existing answer using getOne()', async () => {
    const answer = await readableRepo.getOne(
      AnswersQueryMother.getOneWith(AnswerMother.random())
    )

    expect(answer).toBeNull()
  })
})
