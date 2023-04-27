/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */

import { JwtPayload as Payload, VerifyOptions } from 'jsonwebtoken'

export enum JwtType {
  BEARER = 'Bearer',
  REFRESH = 'Refresh',
  ID = 'ID',
}

export interface JwtPayload extends Payload {
  sub: string
  groups: string[]
  typ: JwtType
}

export interface OidcOptions extends Omit<VerifyOptions, 'algorithms'> {
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
  /**
   * Ignore token type
   *
   * @description If set to true, the JWT type will not be verified.
   */
  ignoreType?: boolean
}
