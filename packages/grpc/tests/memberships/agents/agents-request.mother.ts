/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import { IGetAgentRequest } from '../../../src/consumers/memberships'

export class AgentsRequestMother {
  static randomForGetOne(): IGetAgentRequest {
    return {
      id: ObjectMother.uuid('agt'),
    }
  }

  static randomForGetOneEmpty(): IGetAgentRequest {
    return {
      id: '',
    }
  }
}
