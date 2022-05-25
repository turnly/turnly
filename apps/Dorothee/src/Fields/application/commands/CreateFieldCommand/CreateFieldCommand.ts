import { ICommand } from '@turnly/core'
import { CreateFieldPayload } from 'Fields/domain/payloads/CreateFieldPayload'

export class CreateFieldCommand implements ICommand {
  public constructor(
    public readonly params: {
      payload: CreateFieldPayload
      publishEventsInstantly?: boolean
    }
  ) {}
}
