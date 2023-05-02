/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { OIDC } from '@turnly/auth'
import {
  ExceptionHandler,
  UnauthenticatedException,
} from '@turnly/observability'

import { MetaMapper } from '../producers/common/meta.mapper'
import { Action, ICallback } from '../producers/common/request-handler.type'
import {
  Context,
  MiddlewareHandler,
} from '../producers/common/server-options.type'
import { ExceptionResponse } from '../producers/queuing-system'

export class AuthGuard<Request = unknown>
  implements MiddlewareHandler<ExceptionResponse, Request>
{
  public constructor(
    private readonly oidc: OIDC,
    private readonly ignorePaths: string[] = []
  ) {}

  public async execute(
    ctx: Context<ExceptionResponse, Request>,
    next: Action,
    callback: ICallback<ExceptionResponse>
  ): Promise<void> {
    try {
      const {
        call: { metadata },
        service: { path },
      } = ctx

      if (!this.ignorePaths.includes(path)) {
        const authorization = metadata.get('authorization').toString()
        const token = authorization.split(' ')[1]

        if (!token) throw new UnauthenticatedException()

        const member = await this.oidc.verify(token)
        metadata.set('member', JSON.stringify(member))
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
