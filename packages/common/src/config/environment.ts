/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export class Environment {
  private static isEnv(envs: string[]) {
    return envs.includes(this.getEnv())
  }

  public static getEnv() {
    return process.env.NODE_ENV ?? ''
  }

  public static isDevelopment() {
    return this.isEnv(['development', 'dev', 'develop'])
  }

  public static isProduction() {
    return this.isEnv(['production', 'prod'])
  }

  public static isTest() {
    return this.isEnv(['test', 'testing', 'ci'])
  }

  public static isStage() {
    return this.isEnv(['stage', 'staging', 'stg'])
  }

  public static isLocal() {
    return this.isEnv(['local', 'loc'])
  }

  public static isNotProduction() {
    return !this.isProduction()
  }

  public static isNotDevelopment() {
    return !this.isDevelopment()
  }

  public static isNotTest() {
    return !this.isTest()
  }
}
