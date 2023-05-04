/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import { GetMemberResponse, Member, Meta } from '../../../src/producers/tenancy'

export class MembersResponseMother {
  static randomForGetOne(): GetMemberResponse {
    const member = new Member()
      .setId(ObjectMother.uuid('agt'))
      .setName(ObjectMother.names())
      .setLocationId(ObjectMother.uuid('loc'))

    return new GetMemberResponse().setData(member)
  }

  static randomForGetOneError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetMemberResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetMemberResponse().setMeta(meta)
  }
}
