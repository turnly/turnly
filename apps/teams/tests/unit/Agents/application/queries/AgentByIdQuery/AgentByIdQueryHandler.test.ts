/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { AgentByIdQueryHandler } from '../../../../../../src/Agents/application/queries/AgentByIdQuery'
import { AgentsReadableRepo } from '../../../__mocks__/AgentsReadableRepo'
import { AgentMother } from '../../../domain/AgentMother'
import { AgentByIdQueryMother } from './AgentByIdQueryMother'

let repository: AgentsReadableRepo
let handler: AgentByIdQueryHandler

describe('agents > queries > validates the expected behavior of AgentByIdQuery', () => {
  beforeEach(() => {
    repository = new AgentsReadableRepo()
    handler = new AgentByIdQueryHandler(repository)
  })

  it('should get an existing agent', async () => {
    const query = AgentByIdQueryMother.random()
    const agent = AgentMother.fromExistingAgentOnQuery(query)

    repository.attachGetOneResponse(agent)

    const response = await handler.execute(query)

    expect(response).toEqual(agent)
    repository.assertGetOneHasBeenCalled()
  })
})
