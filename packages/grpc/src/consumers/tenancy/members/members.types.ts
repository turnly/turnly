/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetMemberByUserIdRequest,
  GetMemberByUserIdResponse,
  GetMemberRequest,
  GetMemberResponse,
} from '../../../producers/tenancy'

export type IGetMemberRequest = GetMemberRequest.AsObject
export type IGetMemberResponse = GetMemberResponse.AsObject
export type IGetMemberByUserIdRequest = GetMemberByUserIdRequest.AsObject
export type IGetMemberByUserIdResponse = GetMemberByUserIdResponse.AsObject

export interface IMembersClient {
  getOne(request: IGetMemberRequest): Promise<IGetMemberResponse>
  getByUserId(
    request: IGetMemberByUserIdRequest
  ): Promise<IGetMemberByUserIdResponse>
}
