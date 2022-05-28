import { ICommand } from '@turnly/shared'
import { CreateAnswerPayload } from 'Answers/domain/payloads/CreateAnswerPayload'

export class CreateAnswerCommand implements ICommand {
  public constructor(
    public readonly params: {
      payload: CreateAnswerPayload
      publishEventsInstantly?: boolean
    }
  ) {}
}
