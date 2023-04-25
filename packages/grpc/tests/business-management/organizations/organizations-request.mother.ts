/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import {
  IGetOrganizationBySubdomainRequest,
  IGetOrganizationRequest,
} from '../../../src/consumers/business-management'

export class OrganizationsRequestMother {
  static randomForGetOne(): IGetOrganizationRequest {
    return {
      id: ObjectMother.uuid('int'),
    }
  }

  static randomForGetOneEmpty(): IGetOrganizationRequest {
    return {
      id: '',
    }
  }

  static randomForGetOneBySubdomain(): IGetOrganizationBySubdomainRequest {
    return {
      subdomain: ObjectMother.word(),
    }
  }

  static randomForGetOneBySubdomainEmpty(): IGetOrganizationBySubdomainRequest {
    return {
      subdomain: '',
    }
  }
}
