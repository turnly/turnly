# Bifröst — Realtime Bridge

It's the real-time event bridge that sends data between internal services and applications.

### Getting Started

To properly set up the Docker environment, ensure you meet the following requirements:

- [Docker](https://www.docker.com)
- [Node.js](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/getting-started/install)

#### Getting sources

Clone this repository:

```sh
# For convenience, clone this repository to a previously created directory
# called turnly or turnly-apps so it doesn't interfere with
# other possible development directories.

# Create turnly directory (optional) ✅ 
mkdir turnly

# Go to turnly directory
cd turnly

# Clone repository
git clone git@github.com:turnly/bifrost.git
```

#### Install dependencies

```sh
# Go to bifrost directory (inside of turnly) ✅ 
cd bifrost

# Install deps
yarn install

# Enable husky, run:
npx --no-install husky install
```

#### Start (docker)

```sh
yarn dev
```

#### Stop (docker)

```sh
docker stop bifrost
```

#### Logs (docker)

```sh
docker logs bifrost -f
```
