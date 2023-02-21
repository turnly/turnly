/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ICommand } from '../contracts/cqrs/command.interface'
import { ICommandHandler } from '../contracts/cqrs/command-handler.interface'

export interface Type<T = any> extends Function {
  new (...args: any[]): T
}

export type CommandHandlerType<C extends ICommand = ICommand> = Type<
  ICommandHandler<C>
>

export interface CommandMetadata {
  id: string
}
