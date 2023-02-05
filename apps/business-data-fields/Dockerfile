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
## Deps
##
## Base stage for installing all dependencies.
##
FROM node:${NODE_VERSION} AS deps

WORKDIR /app

# Copy the application dependency declaration file
COPY package.json ./

# Install required system packages
RUN apk add --virtual .stage-deps --no-cache --update libc6-compat g++ git cmake make python3 \
    # Install application dependencies
    && yarn install --immutable --immutable-cache \
    # Delete unnecessary files from dependencies
    && yarn autoclean --init && yarn autoclean --force \
    # Delete system packages after installation (not needed)
    && apk del .stage-deps && rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

##
## Builder
##
## Stage for building the production source code into a distributable image.
##
FROM node:${NODE_VERSION} AS builder

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# Copy the application source files
COPY . .
# Copy dependencies from previous stage
COPY --from=deps /app/node_modules ./node_modules

# Build source code
RUN yarn build \
    # Install git binary for run dependency installation
    && apk add --virtual .stage-builder --no-cache --update git \
    # Install production dependencies
    && yarn install --immutable --immutable-cache --prod --silent --ignore-optional --force \
    # Delete unnecessary files from dependencies
    && yarn autoclean --init && yarn autoclean --force \
    # Delete system packages after installation (not needed)
    && apk del .stage-builder && rm -rf /var/cache/apk/* /tmp/* /var/tmp/*

##
## Production
##
## Stage for running the distributable image in production mode.
##
FROM gcr.io/distroless/nodejs18-debian11 AS production

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}
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
FROM node:${NODE_VERSION} AS development

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules

# Run the application with watch mode for automatic code changes.
CMD ["yarn", "watch"]
