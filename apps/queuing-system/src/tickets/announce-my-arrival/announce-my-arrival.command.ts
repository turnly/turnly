/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { ICommand } from '@turnly/core'

export type AnnounceMyArrivalParams = {
  id: Guid
  organizationId: Guid
  customerId: Guid
  /**
   * TODO: Implement the logic to validate the device location of the customer
   *
   *  customerLocation: {
        latitude: number
        longitude: number
      }
   */
}

export class AnnounceMyArrivalCommand implements ICommand {
  public constructor(public readonly params: AnnounceMyArrivalParams) {}
}
