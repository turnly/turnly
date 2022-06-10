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
      if (entity.nick) {
        agent.setNick(entity.nick)
      }
      if (entity.position) {
        agent.setPosition(entity.position)
      }
      agent.setCompanyId(entity.companyId)
      agent.setLocationId(entity.locationId)
      agent.setServicesId(entity.servicesId)
    }

    return agent
  }
}
