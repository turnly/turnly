/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { JwtPayload, VerifyOptions as VOptions } from 'jsonwebtoken'

export enum JwtType {
  BEARER = 'Bearer',
  REFRESH = 'Refresh',
  ID = 'ID',
}

export interface AuthPayload extends JwtPayload {
  sub: string
  groups: string[]
  typ: JwtType
}

type Options = Omit<VOptions, 'algorithms' | 'issuer' | 'audience' | 'complete'>

export interface VerifyOptions extends Options {
  /**
   * Token Type
   *
   * @description The type of the JWT token to verify.
   */
  tokenType?: {
    /**
     * Token type
     *
     * @description The type of the JWT token.
     * @example 'Bearer' | 'Refresh' | 'ID'
     */
    type: JwtType | string

    /**
     * Property
     *
     * @description The property of the JWT token that contains the type.
     * @example 'typ' | 'token_type' | 'source'
     */
    propertyToLookup: string
  }
}

export interface OIDCVerifierOptions extends VerifyOptions {
  /**
   * Issuer
   *
   * @description The issuer of the JWT token.
   * You can also provide the `AUTH_ISSUER` environment variable.
   */
  issuer?: string

  /**
   * Audience
   *
   * @description The audience of the JWT token.
   * You can also provide the `AUTH_AUDIENCE` environment variable.
   */
  audience?: string

  /**
   * JSON Web Key Set (JWKS)
   *
   * @description The JSON Web Key Set (JWKS) is a set of keys which contains the public keys used to verify any JSON Web Token (JWT) issued by the authorization server.
   */
  jwks?: {
    /**
     * URI
     *
     * @description The JWKS endpoint is used to retrieve the public keys used by the OIDC provider to sign the JWTs.
     * You can also provide the `AUTH_JWKS_URI` environment variable.
     */
    jwksUri?: string

    /**
     * Cache
     *
     * @description If set to true, the JWKS will be cached.
     * @default true
     */
    cache?: boolean

    /**
     * Cache max age
     *
     * @description The maximum age of the JWKS cache in milliseconds.
     * @default 7_200_000 (2 hours)
     */
    cacheMaxAge?: number
  }
}
