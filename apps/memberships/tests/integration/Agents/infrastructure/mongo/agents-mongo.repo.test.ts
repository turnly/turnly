/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import '../../../../../src/Agents/infrastructure/register-dependencies/dependencies'

import { ResourceNotFoundException } from '@turnly/observability'
import { MongoEnvironmentArranger } from '@turnly/shared'

import { AgentsModule } from '../../../../../src/agents/agents.module'
import { AgentMother } from '../../../../unit/agents/shared/domain/agent.entity.mother'
import { AgentsQueryMother } from './agents-query.mother'

const writableRepo = AgentsModule.getWritableRepo()
const readableRepo = AgentsModule.getReadableRepo()
const environmentArranger = new MongoEnvironmentArranger()

describe('agents > infrastructure > mongo > validates the expected behavior of mongo-repositories', () => {
  beforeEach(async () => {
    await environmentArranger.arrange()
  })
  afterAll(async () => {
    await environmentArranger.arrange()
    await environmentArranger.close()
  })

  it('should persist a random agent to mongo database', async () => {
    const agent = AgentMother.random()

    await writableRepo.save(agent)
  })

  it('should persist multiple agents using bulk insert to mongo database', async () => {
    const agents = AgentMother.collection()

    await writableRepo.save(agents)
  })

  it('should retrieve a existing agent using getOne()', async () => {
    const agent = AgentMother.random()

    await writableRepo.save(agent)

    const persisted = await readableRepo.getOne(
      AgentsQueryMother.getOneWith(agent)
    )

    if (!persisted) throw new ResourceNotFoundException()

    const attributes = persisted.toObject()
    const expected = agent.toObject()

    expect(attributes.id).toEqual(expected.id)
  })

  it('should retrieve multiple agents using find()', async () => {
    const agents = AgentMother.collection()

    await writableRepo.save(agents)

    const persisted = await readableRepo.find(
      AgentsQueryMother.getManyIn(agents)
    )

    if (!persisted.length) throw new ResourceNotFoundException()

    expect(persisted.length).toEqual(agents.length)
  })

  it('should not retrieve a non-existing agent using getOne()', async () => {
    const agent = await readableRepo.getOne(
      AgentsQueryMother.getOneWith(AgentMother.random())
    )

    expect(agent).toBeNull()
  })
})
