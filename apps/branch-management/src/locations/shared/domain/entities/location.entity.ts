/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { DateTime } from '@turnly/datetime'
import { LocationCreatedEvent } from 'locations/create-location/location-created.event'
import { OpeningHour } from 'opening-hours/shared/domain/entities/opening-hour.entity'

import { LocationStatus } from '../enums/location-status.enum'

/**
 * Location
 *
 * @description Represents answers that can be used to create custom forms for any entity.
 *
 * @author Turnly
 */
export class Location extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Location
     */
    id: Guid,

    /**
     * Name
     *
     * @description The name of the Location.
     */
    private name: string,

    /**
     * Address
     *
     * @description The address of the Location.
     */
    private address: string,

    /**
     * Country
     *
     * @description The country of the Location.
     */
    private country: string,

    /**
     * Timezone
     *
     * @description The timezone of the Location.
     */
    private timezone: string,

    /**
     * Status
     *
     * @description The status of the Location.
     */
    private status: LocationStatus = LocationStatus.INCOMPLETE,

    /**
     * Coordinates
     *
     * @description The coordinates of the Location.
     */
    private coordinates: {
      lat: number
      lng: number
    },

    /**
     * Stop Serving Before
     *
     * @description The time in minutes before the Location stops serving.
     */
    private stopServingBeforeInMinutes: number,

    /**
     * Organization
     *
     * @description The Organization that the Location belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Opening Hours
     *
     * @description The opening hours of the Location.
     */
    private readonly openingHours: OpeningHour[] = []
  ) {
    super(id)
  }

  public getHourOfToday() {
    const today = DateTime.today().setZone(this.timezone)

    return this.openingHours.find(hour =>
      hour.isSameDayOfWeek(today.getWeekday())
    )
  }

  public isOpen() {
    const hourOfToday = this.getHourOfToday()

    if (!hourOfToday) return false

    return hourOfToday.isOpen(this.timezone)
  }

  public isInValidStatus(): boolean {
    return Location.getCompletedStatus().includes(this.status)
  }

  public static getCompletedStatus(): LocationStatus[] {
    return [LocationStatus.COMPLETE]
  }

  /**
   * Create Location
   *
   * @description Creates a new Location.
   */
  public static create(
    attributes: Omit<EntityAttributes<Location>, 'id'>
  ): Location {
    const location = new Location(
      Identifier.generate('loc'),
      attributes.name,
      attributes.address,
      attributes.country,
      attributes.timezone,
      attributes.status,
      attributes.coordinates,
      attributes.stopServingBeforeInMinutes,
      attributes.organizationId,
      attributes.openingHours
    )

    location.register(new LocationCreatedEvent(location.toObject()))

    return location
  }

  /**
   * Build Location
   *
   * @description Builds a Location from an object.
   */
  public static build(attributes: EntityAttributes<Location>): Location {
    return new Location(
      attributes.id,
      attributes.name,
      attributes.address,
      attributes.country,
      attributes.timezone,
      attributes.status,
      attributes.coordinates,
      attributes.stopServingBeforeInMinutes,
      attributes.organizationId,
      attributes.openingHours
    )
  }

  /**
   * Location object
   *
   * @description Returns the Location as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      address: this.address,
      country: this.country,
      timezone: this.timezone,
      status: this.status,
      coordinates: this.coordinates,
      organizationId: this.organizationId,
      stopServingBeforeInMinutes: this.stopServingBeforeInMinutes,
      openingHours: this.openingHours,
    }
  }
}
