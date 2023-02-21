/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
/**
 * App Exception
 *
 * @description Managed operational errors abstraction.
 * @author Turnly
 */
export abstract class Exception extends Error {
  public constructor(
    /**
     * Error message
     *
     * @memberof Exception
     */
    message: string,

    /**
     * A managed operating error?
     *
     * @memberof Exception
     */
    public readonly isOperational: boolean = true
  ) {
    super(message)

    Object.setPrototypeOf(this, new.target.prototype)
    Error.captureStackTrace(this)
  }
}
