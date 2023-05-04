/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { DateTime } from '@turnly/datetime'
import { BadRequestException } from '@turnly/observability'
import { OpeningHourCreatedEvent } from 'opening-hours/save-opening-hours/opening-hour-created.event'

/**
 * Opening Hour
 *
 * @description Represents the schedule of a location.
 *
 * @author Turnly
 */
export class OpeningHour extends AggregateRoot {
  /**
   * Day of Week
   *
   * @description The days of the week that the location is open at (0 = Sunday, 1 = Monday, etc.).
   */
  public static readonly DAY_OF_WEEK = [0, 1, 2, 3, 4, 5, 6]

  /**
   * Day of Week Names
   *
   * @description The days of the week that the location is open at (0 = Sunday, 1 = Monday, etc.).
   */
  public static readonly DAY_OF_WEEK_NAMES = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Opening Hour.
     */
    id: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the Opening Hour.
     */
    private name: string,

    /**
     * Description
     *
     * @description The number of the day of the week it belongs to.
     */
    private dayOfWeek: number,

    /**
     * Description
     *
     * @description True if the location works 24 hours.
     */
    private openAllDay: boolean,

    /**
     * Description
     *
     * @description True if the location is closed all day, like holydays etc.
     */
    private closedAllDay: boolean,

    /**
     * Description
     *
     * @description The hour that the location opens at (only the hour).
     */
    private openHour: number,

    /**
     * Description
     *
     * @description The minutes that the location opens at (only the minutes).
     */
    private openMinutes: number,

    /**
     * Description
     *
     * @description The hour that the location closes at (only the hour).
     */
    private closeHour: number,

    /**
     * Description
     *
     * @description The minutes that the location closes at (only the minutes).
     */
    private closeMinutes: number,

    /**
     * Organization
     *
     * @description The Organization that the Open Hour belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Location
     *
     * @description The Location that the Opening Hour belongs to.
     */
    private readonly locationId: Guid
  ) {
    super(id)
  }

  public static isDayOfWeek(dayOfWeek: number): boolean {
    return OpeningHour.DAY_OF_WEEK.includes(dayOfWeek)
  }

  public static getDayOfWeekName(dayOfWeek: number): string {
    return OpeningHour.DAY_OF_WEEK_NAMES[dayOfWeek]
  }

  public isSameDayOfWeek(dayOfWeek: number): boolean {
    return this.dayOfWeek === dayOfWeek
  }

  public getDay(): number {
    return this.dayOfWeek
  }

  public getOpenHour(timezone = 'UTC'): DateTime {
    return DateTime.today().setZone(timezone).change({
      hour: this.openHour,
      minute: this.openMinutes,
    })
  }

  public getCloseHour(timezone = 'UTC'): DateTime {
    return DateTime.today().setZone(timezone).change({
      hour: this.closeHour,
      minute: this.closeMinutes,
    })
  }

  public isOpen(timezone = 'UTC'): boolean {
    if (this.closedAllDay) return false
    if (this.openAllDay) return true

    const now = DateTime.now().setZone(timezone)
    const openHour = this.getOpenHour(timezone)
    const closeHour = this.getCloseHour(timezone)

    return now.inRange(openHour, closeHour)
  }

  public isClosed(timezone = 'UTC'): boolean {
    return !this.isOpen(timezone)
  }

  public validate(): OpeningHour {
    if (!OpeningHour.isDayOfWeek(this.dayOfWeek)) {
      throw new BadRequestException(
        'Oops!, You are trying to create an Opening Hour with an invalid day of week.'
      )
    }

    if (this.openAllDay && this.closedAllDay) {
      throw new BadRequestException(
        'Oops!, You are trying to create an Opening Hour with open all day and closed all day.'
      )
    }

    if (this.getOpenHour().isAfter(this.getCloseHour().toJSDate())) {
      throw new BadRequestException(
        'Oops!, You are trying to create an Opening Hour with an invalid open hour and close hour.'
      )
    }

    return this
  }

  /**
   * Create Opening Hour
   *
   * @description Creates a new Opening Hour.
   */
  public static create(
    attributes: Omit<EntityAttributes<OpeningHour>, 'id' | 'name'>
  ): OpeningHour {
    const openingHour = new OpeningHour(
      Identifier.generate('hour'),
      this.getDayOfWeekName(attributes.dayOfWeek),
      attributes.dayOfWeek,
      attributes.openAllDay,
      attributes.closedAllDay,
      attributes.openHour,
      attributes.openMinutes,
      attributes.closeHour,
      attributes.closeMinutes,
      attributes.organizationId,
      attributes.locationId
    )

    openingHour
      .validate()
      .register(new OpeningHourCreatedEvent(openingHour.toObject()))

    return openingHour
  }

  /**
   * Build Opening Hour
   *
   * @description Builds a Opening Hour from an object.
   */
  public static build(attributes: EntityAttributes<OpeningHour>): OpeningHour {
    const hour = new OpeningHour(
      attributes.id,
      this.getDayOfWeekName(attributes.dayOfWeek),
      attributes.dayOfWeek,
      attributes.openAllDay,
      attributes.closedAllDay,
      attributes.openHour,
      attributes.openMinutes,
      attributes.closeHour,
      attributes.closeMinutes,
      attributes.organizationId,
      attributes.locationId
    )

    hour.validate()

    return hour
  }

  /**
   * Opening Hour object
   *
   * @description Returns the Opening Hour as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      dayOfWeek: this.dayOfWeek,
      openAllDay: this.openAllDay,
      closedAllDay: this.closedAllDay,
      openHour: this.openHour,
      openMinutes: this.openMinutes,
      closeHour: this.closeHour,
      closeMinutes: this.closeMinutes,
      organizationId: this.organizationId,
      locationId: this.locationId,
    }
  }
}
