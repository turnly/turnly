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
import { BulkOpeningHoursCommand } from 'opening-hours/bulk-opening-hours'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

import { BulkOpeningHoursValidator } from './bulk-opening-hours.validator'

export class BulkOpeningHoursController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }
  @TimeoutHandler()
  @InputValidator(BulkOpeningHoursValidator)
  public async execute(params: BulkOpeningHoursCommand) {
    const openingHours = await this.commandBus.execute<
      OpeningHour[],
      BulkOpeningHoursCommand
    >(BulkOpeningHoursCommand.build(params))

    return this.respond.created(
      openingHours.map(openingHour => openingHour.toObject())
    )
  }
}
