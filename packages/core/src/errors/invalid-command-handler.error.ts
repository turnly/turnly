/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export class InvalidCommandHandlerError extends Error {
  public constructor() {
    super(
      'Invalid command handler exception (missing @CommandHandler() decorator?)'
    )
  }
}
