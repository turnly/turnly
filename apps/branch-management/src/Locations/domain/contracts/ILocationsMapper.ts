/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Location } from 'Locations/domain/entities/Location'

export type ILocationsMapper<Model> = IEntityMapper<Location, Model>