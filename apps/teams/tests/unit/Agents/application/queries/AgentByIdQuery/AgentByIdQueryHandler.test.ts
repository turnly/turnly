/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
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
