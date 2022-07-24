##
## Docker image for Turnly applications
##

##
## Shared Configuration
##
ARG NODE_VERSION=16.15-alpine3.15
ARG DISTROLESS_VERSION=16
ARG NODE_ENV=production
ARG PORT=6000

##
## Dependencies
##
FROM node:${NODE_VERSION} AS deps

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache --update libc6-compat g++ git cmake make python3 \
  && yarn install --immutable --immutable-cache \
  && yarn autoclean --init && yarn autoclean --force \
  && apk del --purge --no-cache --force-deps --quiet git cmake make python3 npm \
  && rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

##
## Builder
##
FROM node:${NODE_VERSION} AS builder

ARG NODE_ENV
ARG PORT

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn build \
  && apk add --no-cache --update libc6-compat git \
  && yarn install --immutable --immutable-cache --prod --silent --ignore-optional --force \
  && yarn autoclean --init && yarn autoclean --force \
  && apk del --purge --no-cache --force-deps --quiet git \
  && rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

##
## Production
##
FROM gcr.io/distroless/nodejs:${DISTROLESS_VERSION} AS production

ARG NODE_ENV
ARG PORT

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

ENV ROOT_DIR=$(pwd)
ENV NODE_PATH=dist/

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE ${PORT}

CMD ["dist/main.js"]

##
## Development
##
FROM node:${NODE_VERSION} AS development

ARG NODE_ENV
ARG PORT

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

EXPOSE ${PORT}

CMD ["yarn", "watch"]
