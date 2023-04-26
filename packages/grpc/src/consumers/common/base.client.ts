/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  ChannelCredentials,
  Client as gRPCClient,
  ClientOptions as gRPCOptions,
  Metadata,
  ServerUnaryCall,
} from '@grpc/grpc-js'
import { Guid } from '@turnly/common'

import { Credentials } from '../../shared/credentials'
import type { ClientOptions } from './client-options.type'

type Constructor<T> = {
  new (
    address: string,
    credentials: ChannelCredentials,
    options?: gRPCOptions
  ): T
}

export abstract class Client<IClient extends gRPCClient> {
  private readonly metadata: Metadata = new Metadata()
  protected client: IClient

  public constructor(
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ClientConstructor: Constructor<IClient>,
    protected readonly options: ClientOptions
  ) {
    this.client = new ClientConstructor(
      this.getAddress(),
      Credentials.getForClient(),
      options?.grpcOptions
    )
  }

  public setInternalClient(client: IClient) {
    this.client = client

    return this
  }

  public destroyOrganizationId() {
    this.metadata.remove('organization_id')

    return this
  }

  public setOrganizationId(organizationId: Guid) {
    this.metadata.set('organization_id', organizationId.toString())

    return this
  }

  public getOrganizationId(): Guid {
    return this.metadata.get('organization_id').toString()
  }

  public static getOrganizationId(
    call: ServerUnaryCall<unknown, unknown>
  ): Guid {
    return call.metadata.get('organization_id').toString()
  }

  public getAddress(): string {
    const address =
      this.options?.address ||
      process.env.GRPC_CONSUMER_ADDRESS ||
      this.getInternalAddress()

    if (!address)
      throw new Error(
        `No address specified for ${this.constructor.name} client.`
      )

    return address
  }

  private getInternalAddress(): string {
    const address = this.options.internalAddress.split(':')[0]

    return address ? `${address}:${process.env.APP_PORT}` : ''
  }

  protected getOptions(): gRPCOptions {
    return this.options?.grpcOptions ?? {}
  }

  protected getMeta(): Metadata {
    return this.metadata
  }
}
