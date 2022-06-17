import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/shared'

export type LeaveTicketParams = {
  id: Guid
  companyId: Guid
}

export class LeaveTicketCommand implements ICommand {
  public constructor(public readonly params: LeaveTicketParams) {}
}
