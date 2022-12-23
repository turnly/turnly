##
## Docker image for OAuth
##
FROM mesosphere/traefik-forward-auth:3.1.0

ENV SCOPE="openid profile email" \
  COOKIE_NAME="__tly_x_forwarded_auth_data__" \
  USER_COOKIE_NAME="__tly_x_forwarded_auth_name__" \
  CSRF_COOKIE_NAME="__tly_x_forwarded_auth_csrf__" \
  CLAIMS_SESSION_NAME="__tly_x_forwarded_auth_claims__" \
  URL_PATH="/_oauth"

