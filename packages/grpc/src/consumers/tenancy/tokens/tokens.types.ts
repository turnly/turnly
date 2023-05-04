/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CreateTokenRequest,
  CreateTokenResponse,
  ExchangeTokenRequest,
  ExchangeTokenResponse,
  GetTokenRequest,
  GetTokenResponse,
} from '../../../producers/tenancy'

export type IGetTokenRequest = GetTokenRequest.AsObject
export type IGetTokenResponse = GetTokenResponse.AsObject
export type ICreateTokenRequest = CreateTokenRequest.AsObject
export type ICreateTokenResponse = CreateTokenResponse.AsObject
export type IExchangeTokenRequest = ExchangeTokenRequest.AsObject
export type IExchangeTokenResponse = ExchangeTokenResponse.AsObject

export interface ITokensClient {
  create(request: ICreateTokenRequest): Promise<ICreateTokenResponse>
  exchange(request: IExchangeTokenRequest): Promise<IExchangeTokenResponse>
  getOne(request: IGetTokenRequest): Promise<IGetTokenResponse>
}
