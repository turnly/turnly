/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/shared'
import { IAnswersWritableRepo } from 'answers/shared/domain/contracts/answers-repo.interface'
import { Answer } from 'answers/shared/domain/entities/answer.entity'

import { CreateAnswersBulkCommand } from './create-answers-bulk.command'

@CommandHandler(CreateAnswersBulkCommand)
export class CreateAnswersBulkCommandHandler
  implements ICommandHandler<CreateAnswersBulkCommand, Answer[]>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly answersWritableRepo: IAnswersWritableRepo
  ) {}

  public async execute({ answers, organizationId }: CreateAnswersBulkCommand) {
    const resources = answers.map(answer =>
      Answer.create({ ...answer, organizationId })
    )

    await this.answersWritableRepo.save(resources)

    for (const answer of resources) {
      this.eventBus.publish(answer.pull())
    }

    return resources
  }
}
