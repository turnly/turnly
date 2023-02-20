/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import 'reflect-metadata'

import { Identifier } from '@turnly/common'

import { ICommand } from '../contracts/cqrs/command.interface'
import { COMMAND_HANDLER_METADATA, COMMAND_METADATA } from './constants'

export const CommandHandler = (command: ICommand): ClassDecorator => {
  return <T extends Object>(target: T) => {
    if (!Reflect.hasMetadata(COMMAND_METADATA, command)) {
      Reflect.defineMetadata(
        COMMAND_METADATA,
        { id: Identifier.generate('command') },
        command
      )
    }

    Reflect.defineMetadata(COMMAND_HANDLER_METADATA, command, target)
  }
}
