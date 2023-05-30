/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import type mongoose from 'mongoose'

import { Command } from './base.command'

/**
 * Transactional Command
 *
 * @description A command that requires a transaction to be performed
 */
export abstract class TransactionalCommand extends Command {
  public readonly transaction?: mongoose.ClientSession
}
