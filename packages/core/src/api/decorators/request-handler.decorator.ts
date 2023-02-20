/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { ExceptionHandler, Response, ResponseCodes } from '@turnly/common'
import { Response as ExpressResponse } from 'express'

type RouteAction = (...params: unknown[]) => Promise<Response<unknown>>

/**
 * Calls the route action and handles throws.
 *
 * @return {*}  {MethodDecorator}
 * @author Turnly
 */
export const RequestHandler = function (): MethodDecorator {
  return function (
    _target: Object,
    _propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const method = descriptor.value as RouteAction

    descriptor.value = async function (...args) {
      const res: ExpressResponse = args[1]

      try {
        const response = await method.apply(this, args)

        return res
          .status(response.meta.status ?? ResponseCodes.OK)
          .json(response)
      } catch (error) {
        const response = ExceptionHandler.handle(error).toResponse()

        return res.status(response.meta.status).json(response)
      }
    }

    return descriptor
  }
}
