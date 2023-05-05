/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Nullable } from '@turnly/common'
import { EntityAttributes } from '@turnly/core'
import { Producers } from '@turnly/grpc'
import { Feature } from 'features/shared/domain/entities/feature.entity'

export class FeaturesMapper {
  public static toRPC(
    entity: Nullable<EntityAttributes<Feature>> | undefined
  ): Producers.Tenancy.Feature {
    const feature = new Producers.Tenancy.Feature()

    if (entity) {
      feature
        .setId(entity.id)
        .setName(entity.name)
        .setName(entity.name)
        .setQuantity(entity.quantity)
        .setUnit(entity.unit)
        .setKey(entity.key)
        .setType(entity.type)

      feature.setMetadataList(
        entity.metadata.map(({ key, value }) =>
          new Producers.Tenancy.Extra().setKey(key).setValue(value)
        )
      )
    }

    return feature
  }
}
