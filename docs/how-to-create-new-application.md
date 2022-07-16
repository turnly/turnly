<div align="center">
  <p align="center">
      <a href="https://turnly.app" target="_blank" rel="noopener">
          <img src="https://user-images.githubusercontent.com/40646537/179328734-625eba82-51f0-48c3-bb7c-7a1ad5487d79.png" />
      </a>
  </p>

  <p>
    <sub>
      Built with ❤︎ by
      <a href="/OWNERS.md">
        maintainers
      </a>
    </sub>
  </p>
</div>

# Turnly — How to create a new application

> This guide will help you with the addition of new applications, services, BFF, or
> similar so that you are sure to follow all the basic steps
> and reduce the chances of issues in the addition.

1. Copy one of the existing apps, the one that most closely matches the type of app you want to create.
2. Rename your app like the other apps.
3. Find and replace the old name with the new one, be sure to search in lowercase and uppercase.
4. Clean up your copied application and verify that the `your-app/docker/*` files meet your application's expectations.
5. ...
6. Commercial break, take a few minutes, and save your changes...
7. ...
8. Ready, now let's create a docker compose service in `.devo`. Let's go to [.devo/provisioning/apps](/.devo/provisioning/apps/)
and copy one of the files with the name of an existing application. Just like the previous steps, adapt the copied file.
7. **IMPORTANT!** The copied file must have the same name as its directory.
8. Check that your new app is added to the [databases](/.devo/provisioning/infrastructure/datasources/mongo/init-mongo.sh) that are created when starting MongoDB.
9. Lastly, build images before starting containers and re-run setup, run: `yarn devo start --build`
