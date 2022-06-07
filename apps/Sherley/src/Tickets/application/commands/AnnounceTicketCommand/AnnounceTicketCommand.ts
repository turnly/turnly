import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/shared'

export type AnnounceTicketPayload = {
  id: Guid
  companyId: Guid
}

export class AnnounceTicketCommand implements ICommand {
  public constructor(public readonly payload: AnnounceTicketPayload) {}
}
