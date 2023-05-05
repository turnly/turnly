/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Command } from '@turnly/core'
import { FeatureTypes } from 'features/shared/domain/enums/feature-types.enum'
import { FeatureUnits } from 'features/shared/domain/enums/feature-units.enum'

export type FeatureAttributes = {
  name: string
  key: string
  type?: FeatureTypes
  quantity?: number
  unit?: FeatureUnits
}

export class BulkFeaturesCommand extends Command {
  public readonly features: FeatureAttributes[]
}
