import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export type TicketsWaitingForServiceQueryPayload = {
  serviceId: Guid
  companyId: Guid
}

export class TicketsWaitingForServiceQuery implements IQuery {
  public constructor(
    public readonly payload: TicketsWaitingForServiceQueryPayload
  ) {}
}
