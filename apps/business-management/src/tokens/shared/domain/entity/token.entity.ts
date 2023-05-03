/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Scopes } from '@turnly/auth'
import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { InvalidStateException } from '@turnly/observability'
import bcrypt from 'bcrypt'
import { TokenCreatedEvent } from 'tokens/create-token/token-created.event'

/**
 * Token
 *
 * @description Represents an Token in the system that can be used to authenticate a app or user.
 *
 * @author Turnly
 */
export class Token extends AggregateRoot {
  private static PREFIX_LENGTH = 8
  private static SECRET_LENGTH = 32
  private static SECRET_PREFIX = 'st_key'

  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the Token
     */
    id: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the Token.
     */
    private name: string,

    /**
     * Scopes
     *
     * @description The scopes that the Token has access to in the system.
     */
    private scopes: Scopes[],

    /**
     * Prefix
     *
     * @description Is used to identify the type of the Token.
     */
    private readonly prefix: string,

    /**
     * Secret
     *
     * @description The secret that is used to authenticate the Token.
     */
    private secret: string,

    /**
     * Organization
     *
     * @description The Organization that the Token belongs to.
     */
    private readonly organizationId: Guid
  ) {
    super(id)
  }

  public isSameSecret(secret: string): boolean {
    return bcrypt.compareSync(secret, this.secret)
  }

  public encrypt(): Token {
    this.secret = bcrypt.hashSync(this.secret, 10)

    return this
  }

  public changeToDecryptedSecret(decryptedSecret: string): Token {
    if (!this.isSameSecret(decryptedSecret)) {
      throw new InvalidStateException(
        'Oops! The token you are looking for appears to be corrupted or has been revoked.'
      )
    }

    this.secret = decryptedSecret

    return this
  }

  public can(scope: Scopes): boolean {
    return this.scopes.includes(scope)
  }

  public canAll(scopes: Scopes[]): boolean {
    return scopes.every(scope => this.scopes.includes(scope))
  }

  public canSome(scopes: Scopes[]): boolean {
    return scopes.some(scope => this.scopes.includes(scope))
  }

  /**
   * Create Token
   *
   * @description Creates a new Token.
   */
  public static create(
    attributes: Omit<EntityAttributes<Token>, 'id' | 'prefix' | 'secret'>
  ): Token {
    const hasInvalidScopes = attributes.scopes.some(
      scope => !Object.values(Scopes).includes(scope)
    )

    if (hasInvalidScopes) {
      throw new InvalidStateException(
        'Oops! your request contains invalid scopes.'
      )
    }

    const prefix = Identifier.generate(Token.SECRET_PREFIX, Token.PREFIX_LENGTH)
    const secret = Identifier.generate(prefix, Token.SECRET_LENGTH)

    const token = new Token(
      Identifier.generate('tkn'),
      attributes.name,
      attributes.scopes,
      prefix,
      secret,
      attributes.organizationId
    )

    token.register(new TokenCreatedEvent(token.toObject()))

    return token
  }

  /**
   * Build Token
   *
   * @description Builds a Token from an object.
   */
  public static build(attributes: EntityAttributes<Token>): Token {
    return new Token(
      attributes.id,
      attributes.name,
      attributes.scopes,
      attributes.prefix,
      attributes.secret,
      attributes.organizationId
    )
  }

  public static extractPrefix(secret: string): string {
    /**
     * Prefix
     *
     * @summary The 1 is added to the length to include the underscore in the prefix length.
     */
    const length = this.SECRET_PREFIX.length + this.PREFIX_LENGTH + 1

    return secret.slice(0, length)
  }

  /**
   * Token object
   *
   * @description Returns the Token as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      scopes: this.scopes,
      prefix: this.prefix,
      secret: this.secret,
      organizationId: this.organizationId,
    }
  }
}
