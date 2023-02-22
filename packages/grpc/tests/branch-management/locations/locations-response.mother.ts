/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ResponseCodes } from '@turnly/common'
import { ObjectMother } from '@turnly/testing'

import {
  GetLocationResponse,
  Location,
  Meta,
  SearchAvailableLocationsForServingResponse,
} from '../../../src/producers/branch-management'

export class LocationsResponseMother {
  static randomForGetOne(): GetLocationResponse {
    const location = new Location()
      .setId(ObjectMother.uuid('loc'))
      .setName(ObjectMother.names())
      .setAddress(ObjectMother.paragraph())
      .setCountry(ObjectMother.names())
      .setLatitude(ObjectMother.coords().lat.toString())
      .setLongitude(ObjectMother.coords().lng.toString())
      .setStopServingBeforeInMinutes(ObjectMother.integer(60))

    return new GetLocationResponse().setData(location)
  }

  static randomForSearchAvailableLocationsForServing(): SearchAvailableLocationsForServingResponse {
    const locations = ObjectMother.repeater(this.create, 4)

    return new SearchAvailableLocationsForServingResponse().setDataList(
      locations
    )
  }

  static create(): Location {
    return new Location()
      .setId(ObjectMother.uuid('loc'))
      .setName(ObjectMother.names())
      .setAddress(ObjectMother.paragraph())
      .setCountry(ObjectMother.names())
      .setLatitude(ObjectMother.coords().lat.toString())
      .setLongitude(ObjectMother.coords().lng.toString())
      .setStopServingBeforeInMinutes(ObjectMother.integer(60))
  }

  static randomForGetOneError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): GetLocationResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new GetLocationResponse().setMeta(meta)
  }

  static randomForSearchAvailableLocationsForServingError(
    status: ResponseCodes,
    title: string = ObjectMother.names(),
    message: string = ObjectMother.names()
  ): SearchAvailableLocationsForServingResponse {
    const meta = new Meta()
      .setStatus(status)
      .setMessage(message)
      .setTitle(title)

    return new SearchAvailableLocationsForServingResponse().setMeta(meta)
  }
}
