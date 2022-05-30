import { Extra, Guid, Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/shared'
import { Ticket } from 'Tickets/domain/entities/Ticket'
import { TicketStatus } from 'Tickets/domain/enums/TicketStatus'
import { Mapper, MapProp } from 'ts-simple-automapper'

type Entity = EntityAttributes<Ticket>

export class TicketDTO {
  @MapProp()
  id: Guid

  @MapProp()
  status: TicketStatus

  @MapProp()
  displayCode: string

  @MapProp()
  serviceId: Guid

  @MapProp()
  locationId: Guid

  @MapProp()
  customerId: Guid

  @MapProp()
  companyId: Guid

  @MapProp()
  assignedToId: Nullable<Guid>

  @MapProp()
  extra: Nullable<Extra[]>

  public static create(entity: Entity): TicketDTO {
    return new Mapper().map(entity, new TicketDTO())
  }

  public static createList(collection: Entity[]): TicketDTO[] {
    return new Mapper().mapList(collection, TicketDTO)
  }
}
