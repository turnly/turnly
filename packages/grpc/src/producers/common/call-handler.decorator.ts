/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExceptionHandler } from '@turnly/observability'

import { MetaMapper } from './meta.mapper'
import type {
  Action,
  Constructor,
  ICallback,
  ICallResponse,
} from './request-handler.type'

/**
 * Calls the methods and handles throws.
 *
 * @return {*}  {MethodDecorator}
 * @author Turnly
 */
export const CallHandler = function (
  // eslint-disable-next-line @typescript-eslint/naming-convention
  CallResponse: Constructor<ICallResponse>
): MethodDecorator {
  return function (
    _target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value as Action

    descriptor.value = async function (...args) {
      const callback: ICallback<ICallResponse> = args?.[1]

      if (!callback) throw new Error('Missing callback argument')

      try {
        await method.apply(this, args)
      } catch (error: any) {
        const handled = ExceptionHandler.handle(error)
        const { meta } = handled.toResponse()

        const response = new CallResponse()

        response.setMeta(MetaMapper.toRPC(meta))

        handled.isTrusted() ? callback(null, response) : callback(error, null)
      }
    }

    return descriptor
  }
}
