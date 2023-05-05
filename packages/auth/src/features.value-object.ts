/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export class Features {
  private static readonly __NAMESPACE__ = 'features'

  private constructor(private readonly scope: string) {}

  public where(id: string) {
    return `${this.scope}:where:${id}`
  }

  public all() {
    return `${Features.__NAMESPACE__}:all:${this.scope}`
  }

  public static read(scope: string) {
    return new Features(`${Features.__NAMESPACE__}:read:${scope}`)
  }

  public static write(scope: string) {
    return new Features(`${Features.__NAMESPACE__}:write:${scope}`)
  }

  public static del(scope: string) {
    return new Features(`${Features.__NAMESPACE__}:delete:${scope}`)
  }

  public static has(
    features: string[],
    organization: {
      features: string[]
    }
  ) {
    return organization.features.some(p => features.includes(p))
  }
}
