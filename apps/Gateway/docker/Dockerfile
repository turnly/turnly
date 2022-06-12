##
## Docker image for development and stage environment
##

##
## Shared Configuration
##
ARG TRAEFIK_VERSION=v2.7

##
## Build
##
FROM traefik:${TRAEFIK_VERSION} as builder

COPY config /etc/traefik
