/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ICommand } from './command.interface'

export interface ICommandBus<C extends ICommand = ICommand> {
  execute<R, T extends C>(command: T): Promise<R>
}
