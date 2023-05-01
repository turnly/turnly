/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier, Nullable } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { DateTime } from '@turnly/datetime'
import { BadRequestException } from '@turnly/observability'
import { DeviceCreatedEvent } from 'devices/create-device/device-created.event'
import { DevicePairedEvent } from 'devices/pair-to-location'

import { DeviceStatus } from '../enums/device-status.enum'
import { DeviceTypes } from '../enums/device-types.enum'

/**
 * Device
 *
 * @description Represent an Device that is used to connect
 * to a third-party service or applications.
 *
 * @author Turnly
 */
export class Device extends AggregateRoot {
  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Device
     */
    id: Guid,

    /**
     * Name
     *
     * @description The name of the Device.
     */
    private name: string,

    /**
     * Status
     *
     * @description Represents the life-cycle of an Device.
     */
    private status: DeviceStatus,

    /**
     * Type
     *
     * @description The type of the Device.
     */
    private type: DeviceTypes,

    /**
     * Organization
     *
     * @description The Organization that the Device belongs to.
     */
    private readonly organizationId: Guid,

    /**
     * Code
     *
     * @description The code that is used to pair the Device.
     */
    private pairingCode: Nullable<string> = null,

    /**
     * Paired by
     *
     * @description The member that paired the Device.
     */
    private pairedBy: Nullable<Guid> = null,

    /**
     * Paired at
     *
     * @description The date and time that the Device was paired.
     */
    private pairedAt: Nullable<Date> = null,

    /**
     * Location
     *
     * @description The Location that the Device belongs to.
     */
    private locationId: Nullable<Guid> = null
  ) {
    super(id)
  }

  public pairTo(params: {
    locationId: Guid
    token: string
    pairedBy?: Guid
  }): Device {
    if (this.locationId || this.status === DeviceStatus.PAIRED) {
      throw new BadRequestException(
        'Oops, This Device is already paired with a Location'
      )
    }

    if (this.status !== DeviceStatus.UNPAIRED) {
      throw new BadRequestException(
        'Oops, This Device is not in a valid state to be paired'
      )
    }

    this.locationId = params.locationId
    this.status = DeviceStatus.PAIRED
    this.pairedBy = params.pairedBy || this.pairedBy
    this.pairedAt = DateTime.now().toJSDate()

    this.register(
      new DevicePairedEvent({ ...this.toObject(), accessToken: params.token })
    )

    return this
  }

  /**
   * Create Device
   *
   * @description Creates a new Device.
   */
  public static create({
    status = DeviceStatus.UNPAIRED,
    ...attributes
  }: {
    name: string
    status: DeviceStatus
    type: DeviceTypes
    organizationId: Guid
  }): Device {
    if (!Object.values(DeviceStatus).includes(status)) {
      throw new BadRequestException(
        'Oops, You must provide a valid status for the Device'
      )
    }

    if (!Object.values(DeviceTypes).includes(attributes.type)) {
      throw new BadRequestException(
        'Oops, You must provide a valid type for the Device'
      )
    }

    const pairingCode = Identifier.generate('', 5)

    const device = new Device(
      Identifier.generate('dev'),
      attributes.name,
      status,
      attributes.type,
      attributes.organizationId,
      pairingCode
    )

    device.register(new DeviceCreatedEvent(device.toObject()))

    return device
  }

  /**
   * Build Device
   *
   * @description Builds an Device from an object.
   */
  public static build(attributes: EntityAttributes<Device>): Device {
    return new Device(
      attributes.id,
      attributes.name,
      attributes.status,
      attributes.type,
      attributes.organizationId,
      attributes.pairingCode,
      attributes.pairedBy,
      attributes.pairedAt,
      attributes.locationId
    )
  }

  /**
   * Device object
   *
   * @description Returns the Device as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      type: this.type,
      organizationId: this.organizationId,
      locationId: this.locationId,
      pairingCode: this.pairingCode,
      pairedBy: this.pairedBy,
      pairedAt: this.pairedAt,
    }
  }
}
