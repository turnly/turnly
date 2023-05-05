/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExtraMapper } from '../../../producers'
import {
  BulkFeaturesObject,
  BulkFeaturesRequest,
  DeleteFeatureRequest,
  FeaturesClient,
  ListFeaturesRequest,
} from '../../../producers/tenancy'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IBulkFeaturesRequest,
  IBulkFeaturesResponse,
  IDeleteFeatureRequest,
  IFeaturesClient,
  IListFeaturesRequest,
} from './features.types'

export class Features
  extends Client<FeaturesClient>
  implements IFeaturesClient
{
  public constructor(config?: ClientConfig) {
    super(FeaturesClient, {
      internalAddress: 'tenancy.turnly.local',
      ...config,
    })
  }

  public async bulk(
    request: IBulkFeaturesRequest
  ): Promise<IBulkFeaturesResponse> {
    const features = request.featuresList.map(feature =>
      new BulkFeaturesObject()
        .setName(feature.name)
        .setQuantity(feature.quantity)
        .setUnit(feature.unit)
        .setKey(feature.key)
        .setType(feature.type)
        .setMetadataList(ExtraMapper.toRPC(feature.metadataList))
    )

    const req = new BulkFeaturesRequest().setFeaturesList(features)

    return (
      await promisify(this.client.bulk.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async delete(request: IDeleteFeatureRequest) {
    const req = new DeleteFeatureRequest().setKey(request.key)

    return (
      await promisify(this.client.delete.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async list(request: IListFeaturesRequest) {
    const req = new ListFeaturesRequest()
      .setLimit(request.limit)
      .setOffset(request.offset)

    return (
      await promisify(this.client.list.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
