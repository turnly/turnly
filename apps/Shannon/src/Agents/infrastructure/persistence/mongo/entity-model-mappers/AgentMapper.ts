/* eslint-disable @typescript-eslint/naming-convention */
import { EntityAttributes } from '@turnly/shared'
import { IAgentsMapper } from 'Agents/domain/contracts/IAgentsMapper'
import { Agent } from 'Agents/domain/entities/Agent'

import { AgentDocument, AgentModel } from '../models/AgentModel'

export class AgentMapper implements IAgentsMapper<AgentDocument> {
  public toEntity(document: AgentDocument): Agent {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Agent>>()

    return Agent.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Agent): AgentDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new AgentModel({ ...attrs, _id })
  }

  public toEntityList(documents: AgentDocument[]): Agent[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Agent[]): AgentDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
