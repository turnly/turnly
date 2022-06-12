# Athena — How to create a new application

> This guide will help you with the addition of new applications, services, BFF, or
> similar so that you are sure to follow all the basic steps
> and reduce the chances of issues in the addition.

1. Copy one of the existing apps, the one that most closely matches the type of app you want to create.
2. Rename your app and keep the name style with its first capital letter like the other apps.
3. Find and replace the old name with the new one, be sure to search in lowercase and uppercase.
4. Clean up your copied application and verify that the `your-app/docker/*` files meet your application's expectations.
5. Commercial break, take a few minutes, and save your changes...
6. Ready, now let's create a docker compose service in `.devo`.
7. Let's go to [.devo/provisioning/apps](/.devo/provisioning/apps/) and copy one of the files with the name of an existing application.
8. Just like the previous steps, adapt the copied file.
9. **IMPORTANT!** The copied file must have the same name as its directory but in lowercase.
10. Check that your new app is added to the [databases](/.devo/provisioning/infrastructure/datasources/mongo/init-mongo.sh) that are created when starting MongoDB.
11. Lastly, build images before starting containers and re-run setup, run: `yarn devo start --build`
