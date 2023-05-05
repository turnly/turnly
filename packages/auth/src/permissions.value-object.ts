/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export class Permissions {
  private static readonly __NAMESPACE__ = 'permissions'

  private constructor(private readonly scope: string) {}

  public where(id: string) {
    return `${this.scope}:where:${id}`
  }

  public all() {
    return `${Permissions.__NAMESPACE__}:all:${this.scope}`
  }

  public static read(scope: string) {
    return new Permissions(`${Permissions.__NAMESPACE__}:read:${scope}`)
  }

  public static write(scope: string) {
    return new Permissions(`${Permissions.__NAMESPACE__}:write:${scope}`)
  }

  public static del(scope: string) {
    return new Permissions(`${Permissions.__NAMESPACE__}:delete:${scope}`)
  }

  public static has(
    permissions: string[],
    payload: {
      permissions: string[]
    }
  ) {
    return payload.permissions.some(p => permissions.includes(p))
  }
}
