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
  typ: JwtType | string
}

export interface VerifyOptions extends Omit<VOptions, 'algorithms'> {
  /**
   * Ignore token type
   *
   * @description If set to true, the JWT type will not be verified.
   */
  ignoreType?: boolean

  /**
   * Token type
   *
   * @description The type of the JWT token.
   * @example 'Bearer' | 'Refresh' | 'ID' | 'access_token' | 'refresh_token' | 'id_token'
   */
  type?: JwtType | string

  /**
   * Type property
   *
   * @description The name of the property that contains the JWT type.
   * @example 'typ' | 'token_type' | 'source'
   */
  typeProperty?: string
}

export interface OidcOptions extends VerifyOptions {
  jwks: {
    /**
     * JSON Web Key Set (JWKS) URI
     *
     * @description The JWKS endpoint is used to retrieve the public keys used by the OIDC provider to sign the JWTs.
     * @example https://accounts.turnly.local/.well-known/jwks.json
     */
    uri: string
    /**
     * JSON Web Key Set (JWKS) file
     *
     * @description The JWKS file is used to retrieve the public keys used by the OIDC provider to sign the JWTs.
     * @example /path/to/jwks.json
     */
    file?: string
  }
}
