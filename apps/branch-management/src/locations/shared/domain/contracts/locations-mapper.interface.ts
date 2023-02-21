/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Location } from 'locations/shared/domain/entities/location.entity'

export type ILocationsMapper<Model> = IEntityMapper<Location, Model>
