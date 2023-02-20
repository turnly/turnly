/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import { config } from '../config'
import { Encryption } from './encryption'

const options = {
  algorithm: config.get('encryptor.algorithm'),
  secret: config.get('encryptor.secret'),
}

export const Encryptor = new Encryption(options)
