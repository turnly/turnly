/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetAgentByUserIdRequest,
  GetAgentByUserIdResponse,
  GetAgentRequest,
  GetAgentResponse,
} from '../../../producers/memberships'

export type IGetAgentRequest = GetAgentRequest.AsObject
export type IGetAgentResponse = GetAgentResponse.AsObject
export type IGetAgentByUserIdRequest = GetAgentByUserIdRequest.AsObject
export type IGetAgentByUserIdResponse = GetAgentByUserIdResponse.AsObject

export interface IAgentsClient {
  getOne(request: IGetAgentRequest): Promise<IGetAgentResponse>
  getByUserId(
    request: IGetAgentByUserIdRequest
  ): Promise<IGetAgentByUserIdResponse>
}
