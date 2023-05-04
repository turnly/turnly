/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { SignageDisplayCreatedEvent } from 'signage-displays/get-pairing-code/signage-display-created.event'

import { ClearTicketsAfter } from '../enums/clear_tickets_after.enum'
import { Order } from '../enums/order.enum'
import { RefreshTimeUnit } from '../enums/refresh_time_unit.enum'

type IgnoreAttrs =
  | 'id'
  | 'order'
  | 'refreshTime'
  | 'serviceIds'
  | 'locationId'
  | 'refreshTimeUnit'
export type CreateSignageDisplayParams = Omit<
  EntityAttributes<SignageDisplay>,
  IgnoreAttrs
>

/**
 * SignageDisplay
 *
 * @description Represent an SignageDisplay that is used to take tickets from a website.
 *
 * @author Turnly
 */
export class SignageDisplay extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the SignageDisplay
     */
    id: Guid,

    /**
     * Name
     *
     * @description The name of the SignageDisplay.
     */
    private name: string,

    /**
     * Device
     *
     * @description The Device that the SignageDisplay is connected to.
     */
    private readonly deviceId: Guid,

    /**
     * Organization
     *
     * @description The Organization that the SignageDisplay belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Origins
     *
     * @description The white-listed origins that are allowed to access the SignageDisplay.
     */
    private clearTicketsAfter: Nullable<ClearTicketsAfter> = ClearTicketsAfter.AFTER_SERVING,

    /**
     * Origins
     *
     * @description The white-listed origins that are allowed to access the SignageDisplay.
     */
    private refreshTime: Nullable<number> = null,

    /**
     * Origins
     *
     * @description The white-listed origins that are allowed to access the SignageDisplay.
     */
    private refreshTimeUnit: Nullable<RefreshTimeUnit> = null,

    /**
     * Organization
     *
     * @description The Organization that the SignageDisplay belongs to.
     */
    private readonly locationId: Nullable<Guid> = null,

    /**
     * Status
     *
     * @description Represents the life-cycle of an SignageDisplay.
     */
    private serviceIds: Nullable<[]> = [],

    /**
     * Status
     *
     * @description Represents the life-cycle of an SignageDisplay.
     */
    private order: Order = Order.ASC
  ) {
    super(id)
  }

  /**
   * Create SignageDisplay
   *
   * @description Creates a new SignageDisplay.
   */
  public static create({
    ...attributes
  }: CreateSignageDisplayParams): SignageDisplay {
    const signageDisplay = new SignageDisplay(
      Identifier.generate('sign'),
      attributes.name,
      attributes.deviceId,
      attributes.organizationId,
      attributes.clearTicketsAfter
    )

    signageDisplay.register(
      new SignageDisplayCreatedEvent(signageDisplay.toObject())
    )

    return signageDisplay
  }

  /**
   * Build SignageDisplay
   *
   * @description Builds an SignageDisplay from an object.
   */
  public static build(
    attributes: EntityAttributes<SignageDisplay>
  ): SignageDisplay {
    return new SignageDisplay(
      attributes.id,
      attributes.name,
      attributes.deviceId,
      attributes.organizationId,
      attributes.clearTicketsAfter,
      attributes.refreshTime,
      attributes.refreshTimeUnit,
      attributes.locationId,
      attributes.serviceIds,
      attributes.order
    )
  }

  /**
   * Signage Display object
   *
   * @description Returns the SignageDisplay as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      deviceId: this.deviceId,
      organizationId: this.organizationId,
      clearTicketsAfter: this.clearTicketsAfter,
      refreshTime: this.refreshTime,
      refreshTimeUnit: this.refreshTimeUnit,
      locationId: this.locationId,
      serviceIds: this.serviceIds,
      order: this.order,
    }
  }
}
