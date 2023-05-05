/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { FeatureTypes } from 'features/shared/domain/enums/feature-types.enum'
import { FeatureUnits } from 'features/shared/domain/enums/feature-units.enum'
import { FeaturesMapper } from 'features/shared/infrastructure/features-to-grpc.mapper'

import { BulkFeaturesController } from './bulk-features.controller'

export class BulkFeaturesServer {
  public constructor(
    private readonly bulkFeaturesController: BulkFeaturesController
  ) {}

  @Producers.CallHandler(Producers.Tenancy.BulkFeaturesResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Tenancy.BulkFeaturesRequest,
      Producers.Tenancy.BulkFeaturesResponse
    >,
    callback: Producers.ICallback<Producers.Tenancy.BulkFeaturesResponse>
  ) {
    const features = call.request.getFeaturesList().map(feature => {
      const { metadataList: metadata, type, unit, ...data } = feature.toObject()

      return {
        ...data,
        type: type as FeatureTypes,
        unit: unit as FeatureUnits,
        metadata,
      }
    })

    const { data, meta } = await this.bulkFeaturesController.execute({
      features,
    })

    const response = new Producers.Tenancy.BulkFeaturesResponse()

    if (data) response.setDataList(data.map(FeaturesMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
