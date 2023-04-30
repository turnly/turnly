/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CreateAccessTokenRequest,
  CreateAccessTokenResponse,
  ExchangeAccessTokenRequest,
  ExchangeAccessTokenResponse,
  GetAccessTokenRequest,
  GetAccessTokenResponse,
} from '../../../producers/business-management'

export type IGetAccessTokenRequest = GetAccessTokenRequest.AsObject
export type IGetAccessTokenResponse = GetAccessTokenResponse.AsObject
export type ICreateAccessTokenRequest = CreateAccessTokenRequest.AsObject
export type ICreateAccessTokenResponse = CreateAccessTokenResponse.AsObject
export type IExchangeAccessTokenRequest = ExchangeAccessTokenRequest.AsObject
export type IExchangeAccessTokenResponse = ExchangeAccessTokenResponse.AsObject

export interface IAccessTokensClient {
  create(
    request: ICreateAccessTokenRequest
  ): Promise<ICreateAccessTokenResponse>
  exchange(
    request: IExchangeAccessTokenRequest
  ): Promise<IExchangeAccessTokenResponse>
  getOne(request: IGetAccessTokenRequest): Promise<IGetAccessTokenResponse>
}
