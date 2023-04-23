/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { UnauthenticatedException } from '@turnly/observability'
import {
  JsonWebTokenError,
  JwtPayload,
  TokenExpiredError,
  VerifyOptions,
} from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

import { KeySet } from './jwks'

export interface OidcOptions extends VerifyOptions {
  /**
   * JSON Web Key Set (JWKS)
   *
   * @description The JWKS endpoint is used to retrieve the public keys used by the OIDC provider to sign the JWTs.
   * @example https://accounts.turnly.local/.well-known/jwks.json
   */
  jwksUri: string
}

/**
 * OpenID Connect (OIDC)
 *
 * @description The OIDC class is used to verify the JWTs issued by the OIDC provider and to retrieve the public keys used to sign the JWTs.
 */
export class OIDC {
  private readonly jwks: KeySet

  public constructor(private readonly defaultOptions: OidcOptions) {
    this.jwks = new KeySet(this.defaultOptions.jwksUri)
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
    options?: VerifyOptions
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
        { ...this.defaultOptions, ...options },
        (err, decoded) => {
          if (err) {
            if (err instanceof TokenExpiredError)
              return reject(
                new UnauthenticatedException(
                  'Access denied! Your access token has expired.'
                )
              )

            if (err instanceof JsonWebTokenError)
              return reject(
                new UnauthenticatedException(
                  'Access denied! Your access token is invalid.'
                )
              )

            return reject(err)
          }

          resolve(decoded as T)
        }
      )
    })
  }
}
