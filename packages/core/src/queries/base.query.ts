/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { plainToInstance } from 'class-transformer'

import { IQuery } from '../contracts/cqrs/query.interface'
import { instanceValidator } from '../helpers/instance-validator.util'

export abstract class Query implements IQuery {
  /**
   * Create a query
   *
   * @description This method is used to create a query from a plain object. It will validate the object and throw a BadRequestException if validation fails.
   */
  static build<T extends Query>(this: new (...args: any[]) => T, params: T): T {
    const instance = plainToInstance<T, any>(this, { ...params })

    return instanceValidator(instance)
  }
}
