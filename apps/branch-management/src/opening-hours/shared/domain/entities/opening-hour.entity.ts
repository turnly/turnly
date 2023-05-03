/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { OpeningHourCreatedEvent } from 'opening-hours/bulk-opening-hours/opening-hour-created.event'

/**
 * Opening Hour
 *
 * @description Represents the schedule of a location.
 *
 * @author Turnly
 */
export class OpeningHour extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Service
     */
    id: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the Service.
     */
    private name: string,

    /**
     * Description
     *
     * @description A human-readable description of the Service.
     */
    private dayOfWeek: number,

    /**
     * Description
     *
     * @description A human-readable description of the Service.
     */
    private openAllDay: boolean,

    /**
     * Description
     *
     * @description A human-readable description of the Service.
     */
    private closedAllDay: boolean,

    /**
     * Description
     *
     * @description A human-readable description of the Service.
     */
    private openHour: number,

    /**
     * Description
     *
     * @description A human-readable description of the Service.
     */
    private openMinutes: number,

    /**
     * Description
     *
     * @description A human-readable description of the Service.
     */
    private closeHour: number,

    /**
     * Description
     *
     * @description A human-readable description of the Service.
     */
    private closeMinutes: number,

    /**
     * Organization
     *
     * @description The Organization that the Service belongs to.
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

  /**
   * Create Opening Hour
   *
   * @description Creates a new Opening Hour.
   */
  public static create(
    attributes: Omit<EntityAttributes<OpeningHour>, 'id'>
  ): OpeningHour {
    const openingHour = new OpeningHour(
      Identifier.generate('hour'),
      attributes.name,
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

    openingHour.register(new OpeningHourCreatedEvent(openingHour.toObject()))

    return openingHour
  }

  /**
   * Build Opening Hour
   *
   * @description Builds a Opening Hour from an object.
   */
  public static build(attributes: EntityAttributes<OpeningHour>): OpeningHour {
    return new OpeningHour(
      attributes.id,
      attributes.name,
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
