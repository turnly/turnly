/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { UnauthenticatedException } from '@turnly/observability'
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

import { KeySet } from './jwks.service'
import { JwtType, OidcOptions, VerifyOptions } from './jwt.type'

/**
 * OpenID Connect (OIDC)
 *
 * @description The OIDC class is used to verify the JWTs issued by the OIDC provider and to retrieve the public keys used to sign the JWTs.
 */
export class OIDC {
  private readonly jwks: KeySet

  public constructor(private readonly defaultOptions: OidcOptions) {
    this.jwks = new KeySet(this.defaultOptions.jwks)
  }

  /**
   * Setup
   *
   * @description Use this method to initialize the OIDC class. It will fetch the signing keys from the JWKS endpoint.
   */
  public async setup(): Promise<void> {
    await this.jwks.getSigningKeys()
  }

  /**
   * Verify token
   *
   * @description Use this method to verify the JWTs issued by the OIDC provider.
   */
  public async verify<T extends jwt.JwtPayload>(
    token: string,
    defaultOptions?: VerifyOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!token)
        throw new UnauthenticatedException(
          "Access denied! You're trying to access a protected resource without an access token."
        )

      const options = this.getVerifyOptions(defaultOptions)

      jwt.verify(
        token,
        ({ kid }, callback) => callback(null, this.jwks.getPublicKey(kid)),
        options,
        (err, decoded) => {
          if (err) {
            if (err instanceof TokenExpiredError)
              throw new UnauthenticatedException(
                'Oops! Your token has expired and is no longer valid.'
              )

            if (err instanceof JsonWebTokenError)
              throw new UnauthenticatedException(
                'Oops! Your token is invalid and cannot be verified.'
              )

            return reject(err)
          }

          const tokenType = OIDC.getTypeFromPayload(decoded as T, options)

          if (!OIDC.isValidType(options, tokenType))
            throw new UnauthenticatedException(
              'Oops! Your token type is invalid, we expected a different token type.'
            )

          resolve(decoded as T)
        }
      )
    })
  }

  private getVerifyOptions(options?: VerifyOptions) {
    return {
      ...this.defaultOptions,
      ...options,
      /**
       * NOTE: The algorithms option is not configurable. We only support RS256.
       */
      algorithms: ['RS256'] as jwt.Algorithm[],
    }
  }

  private static getTypeFromPayload<T extends jwt.JwtPayload>(
    payload: T,
    options: VerifyOptions
  ) {
    const key = options['typeProperty'] || 'typ'

    return payload[key] as JwtType | string
  }

  private static isValidType(
    options: VerifyOptions,
    tokenType?: JwtType | string
  ): boolean {
    const { ignoreType: canIgnoreType, type: validType } = options

    if (canIgnoreType) return true

    if (!validType)
      throw new UnauthenticatedException(
        "Oops! You didn't specify a token type or didn't allow to ignore the token type."
      )

    return tokenType === validType
  }
}
