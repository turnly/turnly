/**
 * Copyright (c) Turnly Inc. (https://turnly.app)
 *
 * Licensed under MIT License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/shared'
import { Location } from 'Locations/domain/entities/Location'

export type ILocationsMapper<Model> = IEntityMapper<Location, Model>
