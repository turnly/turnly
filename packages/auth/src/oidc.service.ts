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
import { JwtType, OIDCVerifierOptions, VerifyOptions } from './jwt.type'
import { Messages } from './messages.enum'

/**
 * OpenID Connect (OIDC)
 *
 * @description The OIDC class is used to verify the JWTs issued by the OIDC provider and to retrieve the public keys used to sign the JWTs.
 */
export class OIDC {
  private readonly keySet: KeySet

  public constructor(private readonly defaultOptions: OIDCVerifierOptions) {
    const { jwks } = this.getDefaultOptions()

    this.keySet = new KeySet(jwks)
  }

  public getDefaultOptions() {
    const options = Object.freeze({
      issuer: process.env.AUTH_ISSUER,
      audience: process.env.AUTH_AUDIENCE,
      ...this.defaultOptions,
      jwks: {
        jwksUri: process.env.AUTH_JWKS_URI as string,
        cache: true,
        cacheMaxAge: 7_200_000, // 2 hours
        ...this.defaultOptions?.['jwks'],
      },
    })

    if (!options.issuer) throw new Error(Messages.MISSING_ISSUER)

    if (!options.jwks['jwksUri']) throw new Error(Messages.MISSING_JWKS_URI)

    return options
  }

  /**
   * Verify token
   *
   * @description Use this method to verify the JWTs issued by the OIDC provider.
   */
  public async verify<T extends jwt.JwtPayload>(
    token: string,
    extraOptions?: VerifyOptions
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const options = Object.freeze({
        ...this.getDefaultOptions(),
        ...extraOptions,
        algorithms: ['RS256'] as jwt.Algorithm[],
      })

      if (!token)
        return reject(new UnauthenticatedException(Messages.ACCESS_DENIED))

      jwt.verify(
        token,
        ({ kid }, callback) => {
          this.keySet
            .getPublicKey(kid)
            .then(key => callback(null, key))
            .catch(err => callback(err))
        },
        options,
        (err, decoded) => {
          if (err) {
            if (err instanceof TokenExpiredError) {
              return reject(
                new UnauthenticatedException(Messages.TOKEN_EXPIRED)
              )
            }

            if (err instanceof JsonWebTokenError) {
              return reject(
                new UnauthenticatedException(Messages.GENERAL_ERROR)
              )
            }

            return reject(err)
          }

          try {
            this.checkTokenType({ payload: decoded as T, options })
          } catch (error) {
            return reject(error)
          }

          resolve(decoded as T)
        }
      )
    })
  }

  private checkTokenType<T extends jwt.JwtPayload>(params: {
    payload: T
    options: VerifyOptions
  }) {
    const {
      payload,
      options: { tokenType },
    } = params

    const verifyOptions = { ...this.defaultOptions.tokenType, ...tokenType }

    if (!verifyOptions.propertyToLookup) return

    const type = payload[verifyOptions.propertyToLookup] as JwtType

    if (!verifyOptions.type)
      throw new UnauthenticatedException(Messages.MISSING_TYPE)

    if (!type) throw new UnauthenticatedException(Messages.MISSING_TOKEN_TYPE)

    if (type !== verifyOptions.type)
      throw new UnauthenticatedException(Messages.INVALID_TOKEN_TYPE)
  }
}
