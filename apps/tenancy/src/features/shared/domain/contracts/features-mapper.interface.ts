/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IEntityMapper } from '@turnly/core'
import { Feature } from 'features/shared/domain/entities/feature.entity'

export type IFeaturesMapper<Model> = IEntityMapper<Feature, Model>
