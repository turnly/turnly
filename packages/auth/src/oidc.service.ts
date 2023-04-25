/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { UnauthenticatedException } from '@turnly/observability'
import {
  JsonWebTokenError,
  TokenExpiredError,
  VerifyOptions,
} from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

import { KeySet } from './jwks.service'
import { JwtPayload, JwtType, OidcOptions } from './jwt.type'

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
  public async verify<T extends JwtPayload>(
    token: string,
    options?: Omit<VerifyOptions, 'algorithms'>
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!token)
        return reject(
          new UnauthenticatedException(
            "Access denied! You're trying to access a protected resource without an access token."
          )
        )

      jwt.verify(
        token,
        ({ kid }, callback) => callback(null, this.jwks.getPublicKey(kid)),
        { ...this.defaultOptions, ...options, algorithms: ['RS256'] },
        (err, decoded) => {
          if (err) {
            if (err instanceof TokenExpiredError)
              return reject(
                new UnauthenticatedException(
                  'Oops! Your token has expired and is no longer valid.'
                )
              )

            if (err instanceof JsonWebTokenError)
              return reject(
                new UnauthenticatedException(
                  'Oops! Your token is invalid and cannot be verified.'
                )
              )

            return reject(err)
          }

          if (decoded && decoded['typ'] !== JwtType.BEARER)
            return reject(
              new UnauthenticatedException(
                'Oops! Your token type is invalid, we expected a access token (Bearer) but received a different token type.'
              )
            )

          resolve(decoded as T)
        }
      )
    })
  }
}
