/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { IsObject } from 'class-validator'
import type mongoose from 'mongoose'

import { Command } from './base.command'

/**
 * Transactional Command
 *
 * @description A command that requires a transaction to be performed
 */
export abstract class TransactionalCommand extends Command {
  /**
   * The transaction to be used in the command handler
   */
  @IsObject({
    message: 'Oops! The transaction argument is required and must be an object',
  })
  public readonly transaction?: mongoose.ClientSession
}
