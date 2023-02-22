/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  ChannelCredentials,
  credentials,
  ServerCredentials,
} from '@grpc/grpc-js'

export class Credentials {
  public static getForClient(): ChannelCredentials {
    return credentials.createInsecure()
  }

  public static getForServer(): ServerCredentials {
    return ServerCredentials.createInsecure()
  }
}
