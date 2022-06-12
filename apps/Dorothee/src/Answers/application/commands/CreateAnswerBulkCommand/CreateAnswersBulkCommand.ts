import { ICommand } from '@turnly/shared'
import { CreateAnswerPayload } from 'Answers/domain/payloads/CreateAnswerPayload'

export type CreateAnswerBulkCommandPayload = CreateAnswerPayload[]

export class CreateAnswersBulkCommand implements ICommand {
  public constructor(public readonly payload: CreateAnswerBulkCommandPayload) {}
}
