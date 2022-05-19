import { EntityAttributes } from '@turnly/core'
import { Guid } from '@turnly/shared'
import { Integration } from 'Integrations/domain/entities/Integration'
import { IntegrationStatus } from 'Integrations/domain/enums/IntegrationStatus'
import { Mapper, MapProp } from 'ts-simple-automapper'

type Entity = EntityAttributes<Integration>

export class IntegrationDTO {
  @MapProp()
  id: Guid

  @MapProp()
  name: string

  @MapProp()
  status: IntegrationStatus

  @MapProp()
  origins: string[]

  public static create(entity: Entity): IntegrationDTO {
    return new Mapper().map(entity, new IntegrationDTO())
  }

  public static createList(collection: Entity[]): IntegrationDTO[] {
    return new Mapper().mapList(collection, IntegrationDTO)
  }
}
