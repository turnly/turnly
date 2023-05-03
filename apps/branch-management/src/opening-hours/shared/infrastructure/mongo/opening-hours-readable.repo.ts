/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoReadableRepo } from '@turnly/core'
import { IOpeningHoursMapper } from 'opening-hours/shared/domain/contracts/opening-hours-mapper.interface'
import { IOpeningHoursReadableRepo } from 'opening-hours/shared/domain/contracts/opening-hours-repo.interface'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

import { IOpeningHourDocument, OpeningHourModel } from './opening-hours.model'

export class OpeningHoursReadableRepo
  extends MongoReadableRepo<OpeningHour, IOpeningHourDocument>
  implements IOpeningHoursReadableRepo
{
  public constructor(
    openingHoursMapper: IOpeningHoursMapper<IOpeningHourDocument>
  ) {
    super(OpeningHourModel, openingHoursMapper)
  }
}
