/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { EntityAttributes } from '@turnly/core'
import { IFeaturesMapper } from 'features/shared/domain/contracts/features-mapper.interface'
import { Feature } from 'features/shared/domain/entities/feature.entity'

import { FeatureModel, IFeatureDocument } from './feature.model'

export class FeaturesMapper implements IFeaturesMapper<IFeatureDocument> {
  public toEntity(document: IFeatureDocument): Feature {
    const { _id, ...attrs } = document.toObject<EntityAttributes<Feature>>()

    return Feature.build({ ...attrs, id: String(_id) })
  }

  public toModel(entity: Feature): IFeatureDocument {
    const { id: _id, ...attrs } = entity.toObject()

    return new FeatureModel({ ...attrs, _id })
  }

  public toEntityList(documents: IFeatureDocument[]): Feature[] {
    return documents?.map(document => this.toEntity(document))
  }

  public toModelList(entities: Feature[]): IFeatureDocument[] {
    return entities?.map(entity => this.toModel(entity))
  }
}
