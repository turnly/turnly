<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://raw.githubusercontent.com/turnly/turnly/develop/docs/assets/github-header.png" />
      </a>
  </p>

  <p>
    <sub>
      Built with ❤︎ by
      <a href="https://github.com/turnly/turnly/blob/develop/OWNERS.md">
        maintainers
      </a>
    </sub>
  </p>
</div>

# Auth

We use JWT for authentication and authorization in our applications, however we do not
generate tokens directly from our application, leaving authentication as a delegated component that can be toggled.

#### Installation

```sh
yarn add @turnly/auth
```

#### RS256 Signing Algorithm

We use RS256 because it is the recommended algorithm when signing your JWTs.
It's more secure, and you can rotate keys quickly if they're compromised without re-deploying your application with a new secret, as you would have to do with HS256.

#### JSON Web Key Set 

When you create JSON Web Tokens, they are signed using public/private key pair. Signing the token allows its recipient to validate that the content of the token wasn't changed and verify the original issuer of the token created signature.

The OIDC server provides the keys publicly in a URL in the form of a JSON Web Key Set (JWKS). During verification, the public keys are obtained. Here is an example of JWKS:

```json
{
  "keys": [
    {
      "kid": "dkvkkV9wgDWsA7g8bPwwckirxcoDDigCOHOXqoFck2Q",
      "kty": "RSA",
      "alg": "RS256",
      "use": "sig",
      "n": "joVj5rZQ89N8rJUCsqVca9DDcOgmXMVuuMJlnZh_hZtHGKvAE1Q...x200",
      "e": "AQAB"
    }
  ]
}
```

#### Usage

```typescript
import { OIDC } from '@turnly/auth'

const oidc = new OIDC({
  /**
   * The issuer is used to validate the issuer of the JWTs.
   * You can also provide the `AUTH_ISSUER` environment variable.
   */
  issuer: 'https://turnly.us.auth0.com',
  /**
   * JWKs (JSON Web Key Set)
   */
  jwks: {
    /**
     * The uri is used to retrieve the signing keys from the JWKS endpoint.
     * You can also provide the `AUTH_JWKS_URI` environment variable.
     */
    jwksUri: 'https://turnly.us.auth0.com/.well-known/jwks.json',
    /**
     * The cache option is used to cache the signing keys.
     */
    cache: true,
    /**
     * The cacheMaxAge option is used to set the maximum age of the cache. (in milliseconds)
     * Default: 7_200_000 (2 hours)
     */
    cacheMaxAge: 300_000,
  },
})

const payload = await oidc.verify('__TOKEN___', {
  /**
   * Token type
   *
   * @description This is optional verification for validating the expected token type.
   */
  tokenType: {
    /**
     * The expected value of the token type.
     * @example Standard values are `Bearer` | `ID` | `Refresh`
     */
    type: 'Bearer',
    /**
     * The property to lookup the token type.
     */
    claim: 'token_type',
  },
})
```
