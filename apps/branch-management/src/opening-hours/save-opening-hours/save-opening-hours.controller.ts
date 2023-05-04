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
import { SaveOpeningHoursCommand } from 'opening-hours/save-opening-hours'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

import { SaveOpeningHoursValidator } from './save-opening-hours.validator'

export class SaveOpeningHoursController extends Controller {
  public constructor(private readonly commandBus: ICommandBus) {
    super()
  }
  @TimeoutHandler()
  @InputValidator(SaveOpeningHoursValidator)
  public async execute(params: SaveOpeningHoursCommand) {
    const openingHours = await this.commandBus.execute<
      OpeningHour[],
      SaveOpeningHoursCommand
    >(SaveOpeningHoursCommand.build(params))

    return this.respond.created(
      openingHours.map(openingHour => openingHour.toObject())
    )
  }
}
