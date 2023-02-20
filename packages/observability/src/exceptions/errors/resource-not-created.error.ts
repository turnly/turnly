/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { SharedMessages } from '@turnly/common'

/**
 * Resource not created
 *
 * @author Turnly
 */
export class ResourceNotCreatedError extends Error {
  public constructor() {
    super(SharedMessages.CREATING_ERROR)
  }
}
