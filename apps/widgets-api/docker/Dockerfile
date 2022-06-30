##
## Docker image for production and stage environment
##

##
## Shared Configuration
##
ARG NODE_VERSION=16.15.0-alpine
ARG NODE_ENV=production
ARG PORT=4000

##
## Dependencies
##
FROM node:${NODE_VERSION} AS deps

WORKDIR /app

RUN apk add --no-cache libc6-compat g++ git cmake make python3

# copy the package.json to install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production --ignore-scripts

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
    adduser -S turnly -u 1001

COPY --from=builder --chown=turnly:docker /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER turnly

CMD ["yarn", "start"]
