/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import {
  CommandHandler,
  ICommandHandler,
  IEventBus,
  IQueryBus,
} from '@turnly/core'
import { ResourceNotFoundException } from '@turnly/observability'
import { GetOneSignageDisplayQuery } from 'signage-displays/get-one-signage-display'
import { ISignageDisplaysWritableRepo } from 'signage-displays/shared/domain/contratcs/signage-displays-repo.interface'
import { SignageDisplay } from 'signage-displays/shared/domain/entities/signage-display.entity'

import { UpdateSignageDisplayCommand } from './update-signage-display.command'

@CommandHandler(UpdateSignageDisplayCommand)
export class UpdateSignageDisplayCommandHandler
  implements ICommandHandler<UpdateSignageDisplayCommand, SignageDisplay>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly signageDisplaysWritableRepo: ISignageDisplaysWritableRepo
  ) {}

  public async execute(command: UpdateSignageDisplayCommand) {
    const signageDisplay = await this.queryBus.ask<Nullable<SignageDisplay>>(
      GetOneSignageDisplayQuery.build({
        id: command.id,
        organizationId: command.organizationId,
      })
    )

    if (!signageDisplay) throw new ResourceNotFoundException()

    const newSignageDisplay = SignageDisplay.build({
      ...signageDisplay.toObject(),
      ...command,
    })

    this.eventBus.publish(newSignageDisplay.pull())

    await this.signageDisplaysWritableRepo.save(newSignageDisplay)

    return newSignageDisplay
  }
}
