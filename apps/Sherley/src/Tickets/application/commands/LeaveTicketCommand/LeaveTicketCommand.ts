import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/shared'

export type LeaveTicketPayload = {
  id: Guid
  companyId: Guid
}

export class LeaveTicketCommand implements ICommand {
  public constructor(public readonly payload: LeaveTicketPayload) {}
}
