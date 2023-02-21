/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import Crypto from 'crypto'

import type { IEncryption } from '../contracts/providers/encryption.interface'

/**
 * Encryption
 *
 * @author Turnly
 */
export class Encryption implements IEncryption {
  public constructor(
    private readonly options = {
      algorithm: 'AES-256-CTR',
      secret: '',
    }
  ) {}

  /**
   * Get the IV size for the cipher.
   *
   * @return {number}
   */
  public getIvSize = () => 16

  public encrypt(value: string) {
    if (!this.options.algorithm || !this.options.secret)
      throw new Error('The algorithm and secret are required')

    const iv = Crypto.randomBytes(this.getIvSize())
    const cipher = Crypto.createCipheriv(
      this.options.algorithm,
      this.options.secret,
      iv
    )

    const encrypted = Buffer.concat([cipher.update(value), cipher.final()])

    return Buffer.from(
      `${encrypted.toString('hex')}:${iv.toString('hex')}`
    ).toString('base64')
  }

  /**
   * Decrypt the given value.
   *
   * @param  string  $payload
   * @return string
   */
  public decrypt(value: string) {
    if (!this.options.algorithm || !this.options.secret)
      throw new Error('The algorithm and secret are required')

    const buffer = Buffer.from(value, 'base64').toString('ascii')
    const [hash, iv] = buffer.split(':')

    const decipher = Crypto.createDecipheriv(
      this.options.algorithm,
      this.options.secret,
      Buffer.from(iv, 'hex')
    )

    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(hash, 'hex')),
      decipher.final(),
    ])

    return decrypted.toString()
  }
}
