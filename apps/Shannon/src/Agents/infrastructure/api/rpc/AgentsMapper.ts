import { Nullable } from '@turnly/common'
import { Producers } from '@turnly/rpc'
import { EntityAttributes } from '@turnly/shared'
import { Agent } from 'Agents/domain/entities/Agent'

export class AgentMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Agent>> | undefined
  ): Producers.Shannon.Agent {
    const agent = new Producers.Shannon.Agent()

    if (entity) {
      agent.setId(entity.id)
      agent.setName(entity.name)
      agent.setLastname(entity.lastname)
      agent.setCompanyId(entity.companyId)
      agent.setLocationId(entity.locationId)
      if (entity.nick) {
        agent.setNick(entity.nick)
      }
      if (entity.position) {
        agent.setPosition(entity.position)
      }
      agent.setServingFromIds(entity.servingFromIds)
    }

    return agent
  }
}
