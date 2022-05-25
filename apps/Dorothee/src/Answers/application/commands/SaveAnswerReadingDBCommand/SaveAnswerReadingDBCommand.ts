import { EntityAttributes, ICommand } from '@turnly/core'
import { Answer } from 'Answers/domain/entities/Answer'

export class SaveAnswerReadingDBCommand implements ICommand {
  public constructor(public readonly payload: EntityAttributes<Answer>) {}
}
