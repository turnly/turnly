/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CommandHandler,
  ICommandHandler,
  IEventBus,
  IQueryBus,
} from '@turnly/core'
import { ListLocationHoursQuery } from 'opening-hours/list-location-hours'
import { IOpeningHoursWritableRepo } from 'opening-hours/shared/domain/contracts/opening-hours-repo.interface'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

import { SaveOpeningHoursCommand } from './save-opening-hours.command'

@CommandHandler(SaveOpeningHoursCommand)
export class SaveOpeningHoursCommandHandler
  implements ICommandHandler<SaveOpeningHoursCommand, OpeningHour[]>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly openingHoursWritableRepo: IOpeningHoursWritableRepo
  ) {}

  public async execute(command: SaveOpeningHoursCommand) {
    const hours = await this.updateExistingHours(command)

    const newHours = command.openingHours.map(hour =>
      OpeningHour.create({ ...hour, ...command })
    )

    hours.push(
      ...newHours.filter(
        newHour => !hours.find(hour => hour.isSameDayOfWeek(newHour.getDay()))
      )
    )

    await this.openingHoursWritableRepo.save(hours)

    for (const hour of hours) {
      this.eventBus.publish(hour.pull())
    }

    return hours
  }

  private async updateExistingHours({
    openingHours,
    ...command
  }: SaveOpeningHoursCommand) {
    const hours = await this.queryBus.ask<OpeningHour[]>(
      ListLocationHoursQuery.build({ ...command })
    )

    return hours.map(hour => {
      const updates = openingHours.find(({ dayOfWeek }) =>
        hour.isSameDayOfWeek(dayOfWeek)
      )

      return updates
        ? OpeningHour.build({ ...hour.toObject(), ...updates })
        : hour
    })
  }
}
