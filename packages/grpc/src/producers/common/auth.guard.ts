/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OIDC } from '@turnly/auth'
import { ExceptionHandler, Logger } from '@turnly/observability'

import { MetaMapper } from './meta.mapper'
import { Action, ICallback } from './request-handler.type'
import { Context, MiddlewareHandler } from './server-options.type'

export class AuthGuard<Response = unknown, Request = unknown>
  implements MiddlewareHandler<Response, Request>
{
  public constructor(
    private readonly oidc: OIDC,
    private readonly ignorePaths: string[] = []
  ) {}

  public async execute(
    ctx: Context<Response, Request>,
    next: Action,
    callback: ICallback<Response>
  ): Promise<void> {
    try {
      const {
        call: { metadata },
        service: { path },
      } = ctx

      if (!this.ignorePaths.includes(path)) {
        const authorization = metadata.get('authorization').toString()

        const user = await this.oidc.verify(authorization)
        metadata.set('user_logged', JSON.stringify(user))

        Logger.debug('The user is authenticated with the following data:', user)
      }

      await next()
    } catch (error: any) {
      const handled = ExceptionHandler.handle(error)
      const { meta } = handled.toResponse()

      const response = new ExceptionResponse()

      response.setMeta(MetaMapper.toRPC(meta))

      handled.isTrusted() ? callback(null, response) : callback(error, null)
    }
  }
}
