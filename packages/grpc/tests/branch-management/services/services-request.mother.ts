/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import {
  IGetServiceRequest,
  IListServicesOfOneLocationRequest,
} from '../../../src/consumers/branch-management'

export class ServicesRequestMother {
  static randomForGetOne(): IGetServiceRequest {
    return {
      id: ObjectMother.uuid('srv'),
    }
  }

  static randomForGetOneEmpty(): IGetServiceRequest {
    return {
      id: '',
    }
  }

  static randomForListServicesOfOneLocation(): IListServicesOfOneLocationRequest {
    return {
      locationId: ObjectMother.uuid('loc'),
    }
  }

  static randomForListServicesOfOneLocationEmpty(): IListServicesOfOneLocationRequest {
    return {
      locationId: '',
    }
  }
}
