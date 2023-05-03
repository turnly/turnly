/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { CommandHandler, ICommandHandler, IEventBus } from '@turnly/core'
import { IOpeningHoursWritableRepo } from 'opening-hours/shared/domain/contracts/opening-hours-repo.interface'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

import { BulkOpeningHoursCommand } from './bulk-opening-hours.command'

@CommandHandler(BulkOpeningHoursCommand)
export class BulkOpeningHoursCommandHandler
  implements ICommandHandler<BulkOpeningHoursCommand, OpeningHour[]>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly openingHoursWritableRepo: IOpeningHoursWritableRepo
  ) {}

  public async execute({
    openingHours,
    organizationId,
    locationId,
  }: BulkOpeningHoursCommand) {
    const resources = openingHours.map(openingHour =>
      OpeningHour.create({ ...openingHour, organizationId, locationId })
    )

    await this.openingHoursWritableRepo.save(resources)

    for (const openingHour of resources) {
      this.eventBus.publish(openingHour.pull())
    }

    return resources
  }
}
