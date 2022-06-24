import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export class TicketsWaitingForServiceQuery implements IQuery {
  public constructor(
    public readonly serviceIds: Guid[],
    public readonly companyId: Guid
  ) {}
}
