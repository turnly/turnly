##
## Docker image for production and stage
##

##
## Shared Configuration
##
ARG NODE_VERSION=16.15-alpine3.15
ARG NODE_ENV=production
ARG PORT=6000

##
## Dependencies
##
FROM node:${NODE_VERSION} AS deps

WORKDIR /app

COPY package.json yarn.lock ./

RUN apk add --no-cache --update libc6-compat g++ git cmake make python3 \
  && yarn install --frozen-lockfile --production \
  && apk del --purge --no-cache --force-deps --quiet git cmake make python3 npm \
  && rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

##
## Build
##
FROM node:${NODE_VERSION} as builder

ARG NODE_ENV
ENV NODE_ENV ${NODE_ENV}

WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn build

##
## Runner
##
FROM node:${NODE_VERSION} AS runner

ARG NODE_ENV
ARG PORT

ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}

WORKDIR /app

RUN addgroup -g 1001 -S docker && \
    adduser --system turnly -u 1001

COPY --from=builder --chown=turnly:docker /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER turnly

EXPOSE ${PORT}

CMD ["yarn", "start"]
