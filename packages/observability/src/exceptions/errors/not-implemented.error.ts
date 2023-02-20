/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * Not implemented
 *
 * @description Error to be thrown when the current scope is not implemented.
 * @author Turnly
 */
export class NotImplementedError extends Error {
  public constructor() {
    super("This hasn't been implemented")
  }
}
