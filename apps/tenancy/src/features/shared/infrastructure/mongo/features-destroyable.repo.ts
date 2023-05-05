/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { MongoDestroyableRepo } from '@turnly/core'
import { IFeaturesMapper } from 'features/shared/domain/contracts/features-mapper.interface'
import { IFeaturesDestroyableRepo } from 'features/shared/domain/contracts/features-repo.interface'
import { Feature } from 'features/shared/domain/entities/feature.entity'

import { FeatureModel, IFeatureDocument } from './feature.model'

export class FeaturesDestroyableRepo
  extends MongoDestroyableRepo<Feature, IFeatureDocument>
  implements IFeaturesDestroyableRepo
{
  public constructor(featuresMapper: IFeaturesMapper<IFeatureDocument>) {
    super(FeatureModel, featuresMapper)
  }
}
