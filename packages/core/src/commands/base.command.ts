/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { plainToInstance } from 'class-transformer'

import { ICommand } from '../contracts/cqrs/command.interface'
import { instanceValidator } from '../helpers/instance-validator.util'

export abstract class Command implements ICommand {
  /**
   * Create a command
   *
   * @description This method is used to create a command from a plain object. It will validate the object and throw a BadRequestException if validation fails.
   */
  static build<T extends Command>(
    this: new (...args: any[]) => T,
    params: T
  ): T {
    const instance = plainToInstance<T, any>(this, { ...params })

    return instanceValidator(instance)
  }
}
