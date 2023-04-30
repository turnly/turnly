/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { IGetMemberRequest } from '../../../src/consumers/business-management'

export class MembersRequestMother {
  static randomForGetOne(): IGetMemberRequest {
    return {
      id: ObjectMother.uuid('agt'),
    }
  }

  static randomForGetOneEmpty(): IGetMemberRequest {
    return {
      id: '',
    }
  }
}
