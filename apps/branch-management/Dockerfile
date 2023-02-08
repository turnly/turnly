##
## Docker image for Turnly applications
##
## The following build stages are available:
##
## production:
## - Required files are copied into the image.
## - The image is tagged with the current version.
##
## development:
## - Runs the application with watch mode for automatic code changes.
## - Expects source files to be loaded as a run-time volume.

##
## Shared Configuration
##
ARG NODE_VERSION=18.12-alpine3.17 NODE_ENV=production

##
## Base
##
## Base node image for all stages.
##
FROM node:${NODE_VERSION} AS base
ENV TZ Etc/UTC

RUN apk add --no-cache --update libc6-compat git tzdata \
  && cp /usr/share/zoneinfo/${TZ} /etc/localtime && echo ${TZ} > /etc/timezone \
  && apk del --no-network tzdata \
  && rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

WORKDIR /app

##
## Pruning
##
## Stage for pruning dependencies with turbo.
##
FROM base AS pruning

COPY . .
RUN npx turbo prune --scope=@turnly/branch-management --docker

##
## Deps
##
## Base stage for installing all dependencies.
##
FROM base AS deps

COPY .gitignore .gitignore
COPY --from=pruning /app/out/json/ .
COPY --from=pruning /app/out/yarn.lock ./yarn.lock

# Install dependencies
RUN yarn install --immutable --immutable-cache

##
## Builder
##
## Stage for building the production source code into a distributable image.
##
FROM deps AS builder

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

COPY --from=pruning /app/out/full .

RUN npx turbo run build --filter=@turnly/branch-management... \
  && yarn install --immutable --immutable-cache --prod --silent --ignore-optional --force

##
## Production
##
## Stage for running the distributable image in production mode.
##
FROM gcr.io/distroless/nodejs18-debian11 AS production

ENV ROOT_DIR=$(pwd) NODE_PATH=dist/

WORKDIR /app

COPY --from=builder /app/apps/branch-management/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Run the application with node runtime already installed from distroless image.
CMD ["dist/main.js"]

##
## Development
##
## Stage for running application in development mode from volumes.
## This stage requires the source files to be mounted as a run-time volume.
##
FROM base AS development

COPY --from=deps /app/node_modules ./node_modules

WORKDIR /app/apps/branch-management

# Run the application with watch mode for automatic code changes.
CMD ["yarn", "dev"]
