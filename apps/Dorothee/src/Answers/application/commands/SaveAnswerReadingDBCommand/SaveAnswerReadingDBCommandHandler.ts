import { CommandHandler, ICommandHandler } from '@turnly/shared'
import { IAnswerWritableRepository } from 'Answers/domain/contracts/IAnswerRepository'
import { Answer } from 'Answers/domain/entities/Answer'

import { SaveAnswerReadingDBCommand } from './SaveAnswerReadingDBCommand'

@CommandHandler(SaveAnswerReadingDBCommand)
export class SaveAnswerReadingDBCommandHandler
  implements ICommandHandler<SaveAnswerReadingDBCommand, void>
{
  public constructor(
    private readonly answerWritableElasticRepository: IAnswerWritableRepository
  ) {}

  public async execute({ payload }: SaveAnswerReadingDBCommand) {
    const answer = Answer.build(payload)

    await this.answerWritableElasticRepository.save(answer)
  }
}
