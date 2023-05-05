/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type {
  BulkFeaturesRequest,
  BulkFeaturesResponse,
  DeleteFeatureRequest,
  DeleteFeatureResponse,
  ListFeaturesRequest,
  ListFeaturesResponse,
} from '../../../producers/tenancy'

export type IBulkFeaturesRequest = BulkFeaturesRequest.AsObject
export type IBulkFeaturesResponse = BulkFeaturesResponse.AsObject

export type IDeleteFeatureRequest = DeleteFeatureRequest.AsObject
export type IDeleteFeatureResponse = DeleteFeatureResponse.AsObject

export type IListFeaturesRequest = ListFeaturesRequest.AsObject
export type IListFeaturesResponse = ListFeaturesResponse.AsObject

export interface IFeaturesClient {
  bulk(request: IBulkFeaturesRequest): Promise<IBulkFeaturesResponse>
  delete(request: IDeleteFeatureRequest): Promise<IDeleteFeatureResponse>
  list(request: IListFeaturesRequest): Promise<IListFeaturesResponse>
}
