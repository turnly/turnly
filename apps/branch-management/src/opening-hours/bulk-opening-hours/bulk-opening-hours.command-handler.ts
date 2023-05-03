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

import { BulkOpeningHoursCommand } from './bulk-opening-hours.command'

@CommandHandler(BulkOpeningHoursCommand)
export class BulkOpeningHoursCommandHandler
  implements ICommandHandler<BulkOpeningHoursCommand, OpeningHour[]>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly queryBus: IQueryBus,
    private readonly openingHoursWritableRepo: IOpeningHoursWritableRepo
  ) {}

  public async execute(command: BulkOpeningHoursCommand) {
    const hours = await this.updateExistingHours(command)

    for (const { dayOfWeek, ...hour } of command.openingHours) {
      const isHour = hours.find(h => h.isSameDayOfWeek(dayOfWeek))

      if (!isHour)
        hours.push(OpeningHour.create({ ...hour, dayOfWeek, ...command }))
    }

    await this.openingHoursWritableRepo.save(hours)

    for (const hour of hours) {
      this.eventBus.publish(hour.pull())
    }

    return hours
  }

  private async updateExistingHours({
    openingHours,
    ...command
  }: BulkOpeningHoursCommand) {
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
