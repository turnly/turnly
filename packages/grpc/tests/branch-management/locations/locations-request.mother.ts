/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ObjectMother } from '@turnly/testing'

import {
  IGetLocationRequest,
  ISearchAvailableLocationsForServingRequest,
} from '../../../src/consumers/branch-management'

export class LocationsRequestMother {
  static randomForGetOne(): IGetLocationRequest {
    return {
      id: ObjectMother.uuid('loc'),
    }
  }

  static randomForGetOneEmpty(): IGetLocationRequest {
    return {
      id: '',
    }
  }

  static randomForSearchAvailableLocationsForServing(): ISearchAvailableLocationsForServingRequest {
    return {
      searchQuery: ObjectMother.word(),
      country: ObjectMother.names(),
      latitude: ObjectMother.coords().lat.toString(),
      longitude: ObjectMother.coords().lng.toString(),
      limit: ObjectMother.integer(10),
      offset: ObjectMother.integer(5),
    }
  }

  static randomForSearchAvailableLocationsForServingEmpty(): ISearchAvailableLocationsForServingRequest {
    return {
      searchQuery: '',
      country: '',
      latitude: '0',
      longitude: '0',
      limit: 0,
      offset: 0,
    }
  }
}
