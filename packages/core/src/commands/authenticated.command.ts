/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type { User } from '@turnly/tenancy'
import { IsNotEmpty } from 'class-validator'

import { Command } from './base.command'

/**
 * Authenticated Command
 *
 * @description Extend this to create commands that require authentication
 */
export abstract class AuthenticatedCommand extends Command {
  /**
   * Identity
   *
   * @description The identity of the user that is executing the command.
   */
  @IsNotEmpty({
    message: 'Oops! The identity is required, but was not provided.',
  })
  public readonly identity: User
}
