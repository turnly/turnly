# Athena — Development (Docker-backed)

Docker-backed infrastructure Provisioning for development environment.

### Getting Started

To properly set up the Docker environment, ensure you meet the following requirements:

- [Docker](https://www.docker.com)
- [Node.js](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/getting-started/install)

- ⚠️ If you are a **Windows** user, make sure to use a Unix/Linux
based terminal like **Git bash**.

#### Getting the development sources

Clone this repository:

```sh
# For convenience, clone this repository to a previously created directory
# called turnly or turnly-apps so it doesn't interfere with
# other possible development directories.

# Create turnly directory (optional)
mkdir turnly

# Go to turnly directory
cd turnly

# Clone repository
git clone git@github.com:turnly/athena.git
```

#### Install application dependencies

```sh
# Go to turnly directory ✅ 
cd turnly

# Go to athena directory (inside of turnly) ✅ 
cd athena

# You just need to run this in root and it will install all the dependencies for each app.
yarn install
```

#### Start applications

Assuming your application(s) were previously configured.
(environment variables or particular specifications).

Run:

```sh
# Go to turnly directory ✅ 
cd turnly

# Go to athena directory (inside of turnly) ✅ 
cd athena

# Run
yarn start
```

#### Stop applications

```sh
# Go to turnly directory ✅ 
cd turnly

# Go to athena directory (inside of turnly) ✅ 
cd athena

# Run
yarn docker down
```

#### Reload applications

```sh
# Go to turnly directory ✅ 
cd turnly

# Go to athena directory (inside of turnly) ✅ 
cd athena

# Run
yarn docker reload
```

#### Applications logs

```sh
# Go to turnly directory ✅ 
cd turnly

# Go to athena directory (inside of turnly) ✅ 
cd athena

# Run
yarn docker logs
```
