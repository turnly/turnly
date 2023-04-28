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

  public constructor(private readonly options: jwks.Options) {
    this.client = jwks(this.options)
  }

  /**
   * Get public key
   *
   * @description Use this method to get the public key by its key id (kid).
   */
  public async getPublicKey(kid?: string): Promise<string> {
    const key = await this.client.getSigningKey(kid)

    if (!key) throw new Error('Oops!, the provided kid does not match any key')

    return key.getPublicKey()
  }
}
