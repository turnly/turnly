/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IReadableRepository, IWritableRepository } from '@turnly/core'

import { OpeningHour } from '../entities/opening-hour.entity'

export type IOpeningHoursReadableRepo = IReadableRepository<OpeningHour>
export type IOpeningHoursWritableRepo = IWritableRepository<OpeningHour>
