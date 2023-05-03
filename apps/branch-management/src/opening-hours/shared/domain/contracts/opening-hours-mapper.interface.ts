/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/core'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

export type IOpeningHoursMapper<Model> = IEntityMapper<OpeningHour, Model>
