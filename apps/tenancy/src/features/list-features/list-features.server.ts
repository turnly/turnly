/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Producers } from '@turnly/grpc'
import { FeaturesMapper } from 'features/shared/infrastructure/features-to-grpc.mapper'

import { ListFeaturesController } from './list-features.controller'

export class ListFeaturesServer {
  public constructor(
    private readonly listFeaturesController: ListFeaturesController
  ) {}

  @Producers.CallHandler(Producers.Tenancy.ListFeaturesResponse)
  public async execute(
    call: Producers.ServerUnaryCall<
      Producers.Tenancy.ListFeaturesRequest,
      Producers.Tenancy.ListFeaturesResponse
    >,
    callback: Producers.ICallback<Producers.Tenancy.ListFeaturesResponse>
  ) {
    const { data, meta } = await this.listFeaturesController.execute({
      limit: call.request.getLimit(),
      offset: call.request.getOffset(),
    })

    const response = new Producers.Tenancy.ListFeaturesResponse()

    if (data) response.setDataList(data.map(FeaturesMapper.toRPC))

    response.setMeta(Producers.MetaMapper.toRPC(meta))

    callback(null, response)
  }
}
