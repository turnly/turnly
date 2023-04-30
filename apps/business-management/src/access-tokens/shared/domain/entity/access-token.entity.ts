/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { Guid, Identifier } from '@turnly/common'
import { AggregateRoot, EntityAttributes } from '@turnly/core'
import { InvalidStateException } from '@turnly/observability'
import { AccessTokenCreatedEvent } from 'access-tokens/create-access-token/access-token-created.event'
import bcrypt from 'bcrypt'

import { CreateByTypes } from '../enums/create-by-types.enum'
import { Scopes } from '../enums/scopes.enum'

/**
 * AccessToken
 *
 * @description Represents an AccessToken in the system that can be used to authenticate a app or user.
 *
 * @author Turnly
 */
export class AccessToken extends AggregateRoot {
  private static PREFIX_LENGTH = 6
  private static TOKEN_LENGTH = 32
  private static TOKEN_PREFIX = 'at'

  protected constructor(
    /**
     * ID
     *
     * @description Unique identifier for the AccessToken
     */
    id: Guid,

    /**
     * Name
     *
     * @description A human-readable name for the AccessToken.
     */
    private name: string,

    /**
     * Scopes
     *
     * @description The scopes that the AccessToken has access to in the system.
     */
    private scopes: Scopes[],

    /**
     * Prefix
     *
     * @description Is used to identify the type of the AccessToken.
     */
    private readonly prefix: string,

    /**
     * Token
     *
     * @description The actual token hash.
     */
    private token: string,

    /**
     * Create By
     *
     * @description The user or app that created the AccessToken.
     */
    private createByType: CreateByTypes,

    /**
     * Create By ID
     *
     * @description The ID of the user or app that created the AccessToken.
     */
    private createById: Guid,

    /**
     * Organization
     *
     * @description The Organization that the AccessToken belongs to.
     */
    private readonly organizationId: Guid
  ) {
    super(id)
  }

  public encrypt(): AccessToken {
    this.token = bcrypt.hashSync(this.token, 10)

    return this
  }

  public isSameToken(token: string): boolean {
    return bcrypt.compareSync(token, this.token)
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
   * Create AccessToken
   *
   * @description Creates a new AccessToken.
   */
  public static create(
    attributes: Omit<EntityAttributes<AccessToken>, 'id' | 'prefix' | 'token'>
  ): AccessToken {
    const hasInvalidScopes = attributes.scopes.some(
      scope => !Object.values(Scopes).includes(scope)
    )

    if (hasInvalidScopes) {
      throw new InvalidStateException(
        'Oops! your request contains invalid scopes.'
      )
    }

    const prefix = Identifier.generate(
      AccessToken.TOKEN_PREFIX,
      AccessToken.PREFIX_LENGTH
    )
    const token = Identifier.generate(prefix, AccessToken.TOKEN_LENGTH)

    const accessToken = new AccessToken(
      Identifier.generate('token'),
      attributes.name,
      attributes.scopes,
      prefix,
      token,
      attributes.createByType,
      attributes.createById,
      attributes.organizationId
    )

    accessToken.register(new AccessTokenCreatedEvent(accessToken.toObject()))

    return accessToken
  }

  /**
   * Build AccessToken
   *
   * @description Builds a AccessToken from an object.
   */
  public static build(attributes: EntityAttributes<AccessToken>): AccessToken {
    return new AccessToken(
      attributes.id,
      attributes.name,
      attributes.scopes,
      attributes.prefix,
      attributes.token,
      attributes.createByType,
      attributes.createById,
      attributes.organizationId
    )
  }

  public static extractPrefix(token: string): string {
    /**
     * Prefix
     *
     * @summary The 1 is added to the length to include the underscore in the prefix length.
     */
    const length = this.TOKEN_PREFIX.length + this.PREFIX_LENGTH + 1

    return token.slice(0, length)
  }

  /**
   * AccessToken object
   *
   * @description Returns the AccessToken as an object.
   */
  public toObject() {
    return {
      id: this.id,
      name: this.name,
      scopes: this.scopes,
      prefix: this.prefix,
      token: this.token,
      createByType: this.createByType,
      createById: this.createById,
      organizationId: this.organizationId,
    }
  }
}
