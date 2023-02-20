/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export interface IEncryption {
  /**
   * Encrypt the given value.
   *
   * @param  {String} value Text to be encrypted
   * @return {String}       Encrypted string
   */
  encrypt(value: string): string

  /**
   * Decrypt the given value.
   *
   * @param  {String} value Text to be encrypted
   * @return {String}       Decrypted string
   */
  decrypt(value: string): string
}
