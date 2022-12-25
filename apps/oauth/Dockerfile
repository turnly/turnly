##
## Docker image for OAuth
##
FROM golang:1.19-alpine as builder

RUN mkdir -p /go/src/github.com/turnly/oauth-middleware
WORKDIR /go/src/github.com/turnly/oauth-middleware

# Install required system packages
RUN apk add --virtual .stage-builder --no-cache --update git \
    # Get the source code
    && git clone https://github.com/turnly/oauth-middleware.git . \
    && chmod -R 777 /go/src/github.com/turnly/oauth-middleware \
    && CGO_ENABLED=0 GOOS=linux GO111MODULE=on go build -a -installsuffix nocgo -o /oauth github.com/turnly/oauth-middleware/cmd \
    # Delete system packages after installation (not needed)
    && apk del .stage-builder && rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

FROM scratch as runner

COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /oauth ./

ENV SCOPE="openid profile email" \
  COOKIE_NAME="__tly_x_forwarded_auth_data__" \
  USER_COOKIE_NAME="__tly_x_forwarded_auth_name__" \
  CSRF_COOKIE_NAME="__tly_x_forwarded_auth_csrf__" \
  CLAIMS_SESSION_NAME="__tly_x_forwarded_auth_claims__" \
  URL_PATH="/_oauth"

ENTRYPOINT ["./oauth"]
