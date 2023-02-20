/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { RequestTimeoutException } from '@turnly/common'

import { config } from '../../config'

export const timeoutRunner = <T>(
  action: Promise<T>,
  time: number = config.get('app.timeout')
) => {
  let timer: NodeJS.Timeout

  return Promise.race([
    action,
    new Promise(
      (_r, rej) =>
        (timer = setTimeout(() => rej(new RequestTimeoutException()), time))
    ),
  ]).finally(() => clearTimeout(timer))
}

/**
 * Timeout Handler
 *
 * @description Create a timer for your request that will kill all processes
 * if your request is delayed longer than stated.
 *
 * @return {*}  {MethodDecorator}
 * @author Turnly
 */
export const TimeoutHandler = function (): MethodDecorator {
  return function (
    _target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value

    descriptor.value = async function (...args) {
      return await timeoutRunner(method.apply(this, args))
    }

    return descriptor
  }
}
