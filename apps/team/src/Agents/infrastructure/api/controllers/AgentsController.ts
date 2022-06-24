import { Nullable, ResourceNotFoundException } from '@turnly/common'
import {
  Controller,
  InputValidator,
  IQueryBus,
  TimeoutHandler,
} from '@turnly/shared'
import { AgentByIdQuery } from 'Agents/application/queries/AgentByIdQuery'
import { Agent } from 'Agents/domain/entities/Agent'

import { validator } from '../validators/AgentsValidator'

export class AgentsController extends Controller {
  public constructor(private readonly queryBus: IQueryBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(validator.get)
  public async getOne(params: AgentByIdQuery) {
    const agent = await this.queryBus.ask<AgentByIdQuery, Nullable<Agent>>(
      new AgentByIdQuery(params.id, params.companyId)
    )

    if (!agent) throw new ResourceNotFoundException()

    return this.respond.ok(agent.toObject())
  }
}
