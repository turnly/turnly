import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class TicketByIdQuery implements IQuery {
  public constructor(
    public readonly id: Guid,
    public readonly customerId: Guid,
    public readonly organizationId: Guid
  ) {}
}
