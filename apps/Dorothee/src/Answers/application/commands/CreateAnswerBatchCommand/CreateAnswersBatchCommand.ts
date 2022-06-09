import { ICommand } from '@turnly/shared'
import { CreateAnswerPayload } from 'Answers/domain/payloads/CreateAnswerPayload'

export type CreateAnswerBatchCommandPayload = CreateAnswerPayload[]

export class CreateAnswersBatchCommand implements ICommand {
  public constructor(
    public readonly payload: CreateAnswerBatchCommandPayload
  ) {}
}
