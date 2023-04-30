/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  GetMemberByUserIdRequest,
  GetMemberRequest,
  MembersClient,
} from '../../../producers/business-management'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  IGetMemberByUserIdRequest,
  IGetMemberByUserIdResponse,
  IGetMemberRequest,
  IGetMemberResponse,
  IMembersClient,
} from './members.types'

export class Members extends Client<MembersClient> implements IMembersClient {
  public constructor(config?: ClientConfig) {
    super(MembersClient, {
      internalAddress: 'business-management.turnly.local',
      ...config,
    })
  }

  public async getOne(request: IGetMemberRequest): Promise<IGetMemberResponse> {
    const req = new GetMemberRequest().setId(request.id)

    return (
      await promisify(this.client.getOne.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async getByUserId(
    request: IGetMemberByUserIdRequest
  ): Promise<IGetMemberByUserIdResponse> {
    const req = new GetMemberByUserIdRequest().setUserId(request.userId)

    return (
      await promisify(this.client.getByUserId.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
