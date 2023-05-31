/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ICommand } from './command.interface'

export interface ICommandHandler<C extends ICommand = any, R = any> {
  execute<T = unknown>(command: C, transaction?: T): Promise<R>
}
