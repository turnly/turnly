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

import { BulkFeaturesCommand } from './bulk-features.command'
import { BulkFeaturesValidator } from './bulk-features.validator'

export class BulkFeaturesController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }

  @TimeoutHandler()
  @InputValidator(BulkFeaturesValidator)
  public async execute(params: BulkFeaturesCommand) {
    const features = await this.commandBus.execute<
      Feature[],
      BulkFeaturesCommand
    >(BulkFeaturesCommand.build(params))

    return this.respond.created(features.map(feature => feature.toObject()))
  }
}
