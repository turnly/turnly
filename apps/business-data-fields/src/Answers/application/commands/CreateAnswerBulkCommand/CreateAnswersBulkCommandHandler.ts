/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { IAnswersWritableRepo } from 'Answers/domain/contracts/IAnswersRepo'
import { Answer } from 'Answers/domain/entities/Answer'

import { CreateAnswersBulkCommand } from './CreateAnswersBulkCommand'

@CommandHandler(CreateAnswersBulkCommand)
export class CreateAnswerBulkCommandHandler
  implements ICommandHandler<CreateAnswersBulkCommand, Answer[]>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly answersWritableRepo: IAnswersWritableRepo
  ) {}

  public async execute({ params }: CreateAnswersBulkCommand) {
    const answers = params.map(Answer.create)

    await this.answersWritableRepo.save(answers)

    for (const answer of answers) {
      this.eventBus.publish(answer.pull())
    }

    return answers
  }
}
