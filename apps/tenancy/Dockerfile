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
ARG NODE_VERSION=18.14-slim NODE_ENV=production

##
## Base
##
## Base node image for all stages.
##
FROM node:${NODE_VERSION} AS base
WORKDIR /app

RUN --mount=type=cache,id=apt,target=/var/cache/apt \
  apt-get update \
  && apt-get install -yqq --no-install-recommends python3 git ca-certificates \
  && rm -rf /var/lib/apt/lists/*

##
## Deps
##
## Base stage for installing all dependencies.
##
FROM base AS dependencies

# Copy the application dependency declaration file
COPY package.json ./

RUN yarn install --immutable --immutable-cache

##
## Builder
##
## Stage for building the production source code into a distributable image.
##
FROM base AS builder

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Copy the application source files
COPY . .
# Copy dependencies from previous stage
COPY --from=dependencies /app/node_modules ./node_modules

# Install production dependencies and build source code
RUN yarn build && yarn install --immutable --immutable-cache --prod --silent --ignore-optional --force

##
## Production
##
## Stage for running the distributable image in production mode.
##
FROM gcr.io/distroless/nodejs18-debian11 AS production

ENV ROOT_DIR=$(pwd) NODE_PATH=dist/

WORKDIR /app

COPY --from=builder /app/dist ./dist
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

COPY --from=dependencies /app/node_modules ./node_modules

# Run the application with watch mode for automatic code changes.
CMD ["yarn", "watch"]
