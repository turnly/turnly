import { ICommand } from '@turnly/core'
import { CreateAnswerPayload } from 'Answers/domain/payloads/CreateAnswerPayload'

export class CreateAnswerCommand implements ICommand {
  public constructor(
    public readonly params: {
      payload: CreateAnswerPayload
      publishEventsInstantly?: boolean
    }
  ) {}
}
