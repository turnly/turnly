/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
import Joi, { Schema } from 'joi'

import { SharedMessages } from '../constants/SharedMessages'

export class Validator {
  public static object(...args) {
    return Joi.object(...args)
  }

  public static isId(isOptional = false) {
    return isOptional
      ? Joi.string().min(10).allow('')
      : Joi.string().required().min(10)
  }

  public static array(items: Schema) {
    return Joi.array().items(items).min(1).unique().required()
  }

  public static email(isOptional = false) {
    return isOptional
      ? Joi.string().email().allow('')
      : Joi.string().email().required()
  }

  public static password() {
    const passwordRegex = new RegExp('^[a-zA-Z0-9]{6,30}$')

    return Joi.string()
      .required()
      .pattern(passwordRegex)
      .message(SharedMessages.PASSWORD_ERROR)
  }

  public static credentials() {
    return Joi.object({
      email: this.email(),
      password: this.password(),
    })
  }

  public static coords(isOptional = false) {
    const required = {
      latitude: Joi.number()
        .precision(8)
        .min(-90)
        .max(90)
        .custom(value => parseFloat(value))
        .strict()
        .required(),
      longitude: Joi.number()
        .precision(8)
        .min(-180)
        .max(180)
        .custom(value => parseFloat(value))
        .strict()
        .required(),
    }

    const optional = {
      latitude: Joi.number()
        .precision(8)
        .min(-90)
        .max(90)
        .custom(value => parseFloat(value))
        .strict(),
      longitude: Joi.number()
        .precision(8)
        .min(-180)
        .max(180)
        .custom(value => parseFloat(value))
        .strict(),
    }

    return isOptional ? optional : required
  }

  public static string(isOptional = false) {
    return isOptional
      ? Joi.string().min(1).allow('')
      : Joi.string().required().min(1)
  }

  public static subdomain() {
    return Joi.string().lowercase().trim().alphanum().min(3).max(40).required()
  }

  public static color(isOptional = false) {
    const RGBA_REGEX = new RegExp(
      /#(([0-9A-Fa-f]{3,4}\b)|([0-9A-Fa-f]{6}\b)|([0-9A-Fa-f]{8})\b)/
    )

    return isOptional
      ? Joi.string().pattern(RGBA_REGEX).message(SharedMessages.COLOR_INVALID)
      : Joi.string()
          .required()
          .pattern(RGBA_REGEX)
          .message(SharedMessages.COLOR_INVALID)
  }

  public static int(isOptional = false) {
    const required = Joi.number()
      .integer()
      .custom(value => parseInt(value))
      .strict()
      .required()

    const optional = Joi.number()
      .integer()
      .custom(value => parseInt(value))
      .strict()

    return isOptional ? optional : required
  }

  public static getBuilder() {
    return Joi
  }
}
