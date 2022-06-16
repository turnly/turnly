import { Guid } from '@turnly/common'
import { IQuery } from '@turnly/shared'

export type GetTicketsWaitingForServiceQueryPayload = {
  serviceId: Guid
  companyId: Guid
}

export class GetTicketsWaitingForServiceQuery implements IQuery {
  public constructor(
    public readonly payload: GetTicketsWaitingForServiceQueryPayload
  ) {}
}
