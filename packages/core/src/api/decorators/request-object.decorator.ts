/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid } from '@turnly/common'
import { Request } from 'express'
import { getClientIp } from 'request-ip'
import UserAgent from 'ua-parser-js'

export interface RequestParams {
  ip: string
  appId: Guid
  clientId: Guid
  token: string
  authorization: string
  device: string
  browser: string
  os: string
  us: string
}

export class RequestDecorator<
  RequestPayload = Record<string, any>,
  RequestData = RequestPayload & RequestParams
> {
  private readonly userAgent: UserAgent.IResult

  public constructor(private readonly req: Request) {
    this.userAgent = new UserAgent(req.get('user-agent')).getResult()
  }

  public getAppId = () => this.req.get('x-app-id') as Guid

  public getClientId = () => this.req.get('x-client-id') as Guid

  public getAuthorization = () => this.req.get('authorization')

  public getIp = () => getClientIp(this.req) ?? 'unknown'

  public getUserAgent = () => this.userAgent.ua

  public getBrowser() {
    const { name, version } = this.userAgent.browser

    return name ? `${name} ${version}` : 'unknown'
  }

  public getOs() {
    const { name, version } = this.userAgent.os

    return name ? `${name} ${version}` : 'unknown'
  }

  public getDevice() {
    const { model, vendor } = this.userAgent.device

    return model ? `${vendor} ${model}` : 'unknown'
  }

  private getParams() {
    const valueMapper = ([key, value]: [string, unknown]) => {
      const asString = String(value)
      const asInt = Number(asString)

      const param = Number.isInteger(asInt)
        ? asInt
        : !isNaN(asInt)
        ? parseFloat(asString)
        : value

      return { [key]: param }
    }

    const params = Object.entries({
      ...this.req.query,
      ...this.req.body,
      ...this.req.params,
    }).map(valueMapper)

    return Object.assign({}, ...params)
  }

  public toParams(): RequestPayload {
    return {
      ...this.getParams(),
    }
  }

  public toData(): RequestData {
    return {
      ...this.getParams(),
      ip: this.getIp(),
      appId: this.getAppId(),
      clientId: this.getClientId(),
      authorization: this.getAuthorization(),
      browser: this.getBrowser(),
      us: this.getUserAgent(),
      os: this.getOs(),
    }
  }
}
