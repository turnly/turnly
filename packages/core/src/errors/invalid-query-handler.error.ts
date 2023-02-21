/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export class InvalidQueryHandlerError extends Error {
  public constructor() {
    super(
      'Invalid query handler exception (missing @QueryHandler() decorator?)'
    )
  }
}
