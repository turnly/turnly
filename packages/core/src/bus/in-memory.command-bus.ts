/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Logger } from '@turnly/observability'

import { ICommand } from '../contracts/cqrs/command.interface'
import { ICommandBus } from '../contracts/cqrs/command-bus.interface'
import { ICommandHandler } from '../contracts/cqrs/command-handler.interface'
import {
  COMMAND_HANDLER_METADATA,
  COMMAND_METADATA,
} from '../decorators/constants'
import { CommandHandlerNotFoundError } from '../errors/command-handler-not-found.error'
import { InvalidCommandHandlerError } from '../errors/invalid-command-handler.error'
import type {
  CommandHandlerType,
  CommandMetadata,
  Type,
} from '../types/command.type'
import { Transaction } from '../types/transaction.type'

export class InMemoryCommandBus<Command extends ICommand = ICommand>
  implements ICommandBus<Command>
{
  private readonly handlers = new Map<string, ICommandHandler<Command>>()

  private transaction?: Transaction

  public async execute<T extends Command, R = any>(command: T): Promise<R> {
    const handler = this.getHandlerForCommand(command)
    const {
      constructor: { name },
    } = this.getCommandType(command)

    Logger.debug(`Executing command ${name} ...`)

    const executed = await handler.execute(command, this.transaction)

    Logger.debug(`Successfully executed the ${name} command`)

    return executed
  }

  public transactional(transaction?: Transaction) {
    this.transaction = transaction

    return this
  }

  public register(handlers: ICommandHandler<Command>[]) {
    for (const handler of handlers) {
      const { constructor: handlerType } = Object.getPrototypeOf(handler)

      const commandId = this.reflectCommandId(handlerType)
      if (!commandId) throw new InvalidCommandHandlerError()

      this.handlers.set(commandId, handler)
    }

    return this
  }

  private getHandlerForCommand(command: Command) {
    const commandId = this.getCommandId(
      this.getCommandType(command).constructor
    )
    const handler = this.handlers.get(commandId)

    if (!handler) {
      throw new CommandHandlerNotFoundError(commandId)
    }

    return handler
  }

  private getCommandId(command: Type<Command>) {
    const meta: CommandMetadata = Reflect.getMetadata(COMMAND_METADATA, command)

    if (!meta?.id) throw new CommandHandlerNotFoundError(command.name)

    return meta.id
  }

  private reflectCommandId(handler: CommandHandlerType<Command>) {
    const command: Type<Command> = Reflect.getMetadata(
      COMMAND_HANDLER_METADATA,
      handler
    )

    return this.getCommandId(command)
  }

  private getCommandType(command: Command) {
    return Object.getPrototypeOf(command)
  }
}
