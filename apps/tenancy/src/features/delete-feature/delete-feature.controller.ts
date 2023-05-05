/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  Controller,
  ICommandBus,
  InputValidator,
  TimeoutHandler,
} from '@turnly/core'
import { Feature } from 'features/shared/domain/entities/feature.entity'

import { DeleteFeatureCommand } from './delete-feature.command'
import { DeleteFeatureValidator } from './delete-feature.validator'

export class DeleteFeatureController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(DeleteFeatureValidator)
  public async execute(params: DeleteFeatureCommand) {
    const feature = await this.commandBus.execute<
      Feature,
      DeleteFeatureCommand
    >(DeleteFeatureCommand.build(params))

    return this.respond.ok(feature.toObject())
  }
}
