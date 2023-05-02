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
import { GetOneTokenQuery } from 'tokens/get-one-token'
import { ITokensWritableRepo } from 'tokens/shared/domain/contracts/tokens-repo.interface'
import { Token } from 'tokens/shared/domain/entity/token.entity'

import { CreateTokenCommand } from './create-token.command'

@CommandHandler(CreateTokenCommand)
export class CreateTokenCommandHandler
  implements ICommandHandler<CreateTokenCommand, Token>
{
  public constructor(
    private readonly eventBus: IEventBus,
    private readonly tokensWritableRepo: ITokensWritableRepo,
    private readonly queryBus: IQueryBus
  ) {}

  public async execute(command: CreateTokenCommand) {
    const payload = Token.create(command)
    const payloadDecrypted = payload.toObject()

    await this.tokensWritableRepo.save(payload.encrypt())

    this.eventBus.publish(payload.pull())

    const token = await this.queryBus.ask<Token>(
      GetOneTokenQuery.build(payloadDecrypted)
    )

    token.changeToDecryptedSecret(payloadDecrypted.secret)

    return token
  }
}
