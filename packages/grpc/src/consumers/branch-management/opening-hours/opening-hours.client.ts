/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CreateOpeningHoursObject,
  CreateRequest,
  ListLocationHoursRequest,
  OpeningHoursClient,
} from '../../../producers/branch-management'
import { Client } from '../../common/base.client'
import type { ClientConfig } from '../../common/client-options.type'
import { promisify } from '../../common/promisify.util'
import {
  ICreateRequest,
  ICreateResponse,
  IListLocationHoursRequest,
  IListLocationHoursResponse,
  IOpeningHoursClient,
} from './opening-hours.type'

export class OpeningHours
  extends Client<OpeningHoursClient>
  implements IOpeningHoursClient
{
  public constructor(config?: ClientConfig) {
    super(OpeningHoursClient, {
      internalAddress: 'branch-management.turnly.local',
      ...config,
    })
  }

  public async listLocationsHours(
    request: IListLocationHoursRequest
  ): Promise<IListLocationHoursResponse> {
    const req = new ListLocationHoursRequest().setLocationId(request.locationId)

    return (
      await promisify(this.client.listLocationHours.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }

  public async create(request: ICreateRequest): Promise<ICreateResponse> {
    const hours = request.openingHoursList.map(hour =>
      new CreateOpeningHoursObject()
        .setName(hour.name)
        .setDayOfWeek(hour.dayOfWeek)
        .setOpenAllDay(hour.openAllDay)
        .setClosedAllDay(hour.closedAllDay)
        .setOpenHour(hour.openHour)
        .setOpenMinutes(hour.openMinutes)
        .setCloseHour(hour.closeHour)
        .setCloseMinutes(hour.closeMinutes)
    )

    const req = new CreateRequest()
      .setOpeningHoursList(hours)
      .setLocationId(request.locationId)

    return (
      await promisify(this.client.create.bind(this.client))(
        req,
        this.getMeta(),
        {}
      )
    ).toObject()
  }
}
