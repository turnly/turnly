/**
 * Copyright (c) 2022, Turnly (https://turnly.app)
 * All rights reserved.
 *
 * Licensed under BSD 3-Clause License. See LICENSE for terms.
 */
export enum Messages {
  ACCESS_DENIED = "Access denied! You're trying to access a protected resource without an access token.",
  TOKEN_EXPIRED = 'Oops! Your token has expired and is no longer valid.',
  GENERAL_ERROR = 'Oops! Your token is invalid and could not be verified.',
  INVALID_TOKEN_TYPE = 'Oops! Your token type is invalid, we expected a different token type.',
  MISSING_TOKEN_TYPE = 'Oops! Your token does not contain a token type.',
  MISSING_TYPE = "Oops! You didn't specify a token type for verification.",
  MISSING_PROPERTY = "Oops! Your token doesn't contain the required property.",
  MISSING_ISSUER = 'Oops!, the OIDC issuer is required. You can provide it using the `issuer` option or the `AUTH_ISSUER` environment variable',
  MISSING_JWKS_URI = 'Oops!, the JWKS URI is required. You can provide it using the `jwksUri` option or the `AUTH_JWKS_URI` environment variable',
}
