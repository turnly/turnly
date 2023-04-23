/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import jwks from 'jwks-rsa'

/**
 * JSON Web Key Set (JWKS)
 *
 * @description The JWKS class is used to retrieve the public keys used by the OIDC provider to sign the JWTs.
 */
export class KeySet {
  private readonly client: jwks.JwksClient
  /**
   * Signing keys
   *
   * @description The signing keys are used to verify the JWTs issued by the OIDC provider.
   */
  private keys: jwks.SigningKey[]

  public constructor(
    /**
     * JSON Web Key Set (JWKS)
     *
     * @description The JWKS endpoint is used to retrieve the public keys used by the OIDC provider to sign the JWTs.
     * @example https://accounts.turnly.local/.well-known/jwks.json
     */
    jwksUri: string
  ) {
    this.client = jwks({ jwksUri })
  }

  /**
   * Get signing keys
   *
   * @description Use this method to get the signing keys from the JWKS endpoint.
   */
  public async getSigningKeys(): Promise<jwks.SigningKey[]> {
    this.keys = this.keys ? await this.client.getSigningKeys() : this.keys

    return this.keys
  }

  /**
   * Get public key
   *
   * @description Use this method to get the public key by its key id (kid).
   */
  public getPublicKey(kid?: string): string {
    if (!this.keys)
      throw new Error(
        'Oops!, the KeySet has not been initialized yet. you should call getSigningKeys() first.'
      )

    const key = this.keys.find(key => key.kid === kid)

    if (!key) throw new Error('Oops!, the provided kid does not match any key')

    return key.getPublicKey()
  }
}
