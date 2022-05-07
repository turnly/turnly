# Development — Docker-backed infrastructure

Infrastructure Provisioning for development environment.

This module will help you with the startup of the apps and the necessary infrastructure using the previous configuration of the `Dockerfile` in each app.

This module does not install apps or configure any particular options for apps, so you must configure your app before attempting to use it with this provisioning.

The reason this module doesn't focus on configuring applications is because we want to be implementation agnostic and allow for scaling in isolation. This module should be useful for using as many apps as possible without being tied to specific configurations.

### Getting Started

To properly set up the Docker environment, ensure you meet the following requirements:

- [Docker](https://www.docker.com)
- [Node.js](https://nodejs.org/en/)
- [Yarn package manager](https://yarnpkg.com/getting-started/install)

### Troubleshooting

If you are a **Windows** user and are getting **Permission denied** errors
to access your hosts file, you need to do the following:

- If you started an earlier installation, run:

```sh
yarn down docker
```

- Close the terminal and reopen another one but as **Administrator**.
- Run again:

```sh
yarn start
```

- Done! ✅ 

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
git clone git@github.com:turnly/development.git
```

#### Getting the apps (microservices) sources

As mentioned above, this module is agnostic to your applications and will only attempt to start applications found in the `$APPS_DIRECTORY` environment variable.

If you are working on an application, you should clone it in `$APPS_DIRECTORY`.

Example:

```sh
##
## Clone the bifrost app on my machine to implement a new feature.
##

# Go to turnly directory
cd turnly

# Go to development directory (inside of turnly)
cd development

# Go to the apps directory (should be the same as the one configured in your .env)
cd apps

# Clone bifrost on apps directory
git clone git@github.com:turnly/bifrost.git
```

#### Start applications

Assuming your application(s) were previously configured. (environment variables
or particular specifications).

Run:

```sh
# Go to turnly directory
cd turnly

# Go to development directory (inside of turnly)
cd development

yarn start
```

#### Stop applications

```sh
yarn docker down
```

#### Reload applications

```sh
yarn docker reload
```

#### Applications logs

```sh
yarn docker logs-since
```
