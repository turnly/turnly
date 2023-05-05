/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { FeaturesMapper } from 'features/shared/infrastructure/features-to-grpc.mapper'

import { DeleteFeatureController } from './delete-feature.controller'

export class DeleteFeatureServer {
  public constructor(
    private readonly deleteFeaturesController: DeleteFeatureController
  ) {}

  @Producers.CallHandler(Producers.Tenancy.DeleteFeatureResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Tenancy.DeleteFeatureRequest,
      Producers.Tenancy.DeleteFeatureResponse
    >,
    callback: Producers.ICallback<Producers.Tenancy.DeleteFeatureResponse>
  ) {
    const { data, meta } = await this.deleteFeaturesController.execute({
      key: call.request.getKey(),
    })

    const response = new Producers.Tenancy.DeleteFeatureResponse()

    if (data) response.setData(FeaturesMapper.toRPC(data))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
