/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import {
  CommandHandler,
  ICommandHandler,
  IEventBus,
  IQueryBus,
} from '@turnly/core'
import { GetOneAccessTokenQuery } from 'access-tokens/get-one-access-token'
import { IAccessTokensWritableRepo } from 'access-tokens/shared/domain/contracts/access-tokens-repo.interface'
import { AccessToken } from 'access-tokens/shared/domain/entity/access-token.entity'

import { CreateAccessTokenCommand } from './create-access-token.command'

@CommandHandler(CreateAccessTokenCommand)
export class CreateAccessTokenCommandHandler
  implements ICommandHandler<CreateAccessTokenCommand, AccessToken>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly accessTokensWritableRepo: IAccessTokensWritableRepo,
    private readonly queryBus: IQueryBus
  ) {}

  public async execute(command: CreateAccessTokenCommand) {
    const payload = AccessToken.create(command)
    const payloadDecrypted = payload.toObject()

    await this.accessTokensWritableRepo.save(payload.encrypt())

    this.eventBus.publish(payload.pull())

    const token = await this.queryBus.ask<AccessToken>(
      GetOneAccessTokenQuery.build(payloadDecrypted)
    )

    token.changeToDecryptedToken(payloadDecrypted.token)

    return token
  }
}
