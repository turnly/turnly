#!/bin/bash

set -e

mongo <<EOF
print("Creating turnly databases...");

const databases = [
  "testing-db",
  "branch-management-db",
  "business-data-fields-db",
<<<<<<< HEAD
=======
  "tenancy-db",
>>>>>>> 2a25d5d8ede4f54c842fa84e722a5ad1116875ec
  "channels-db",
  "queuing-system-db",
];

for (const database of databases) {
  db = db.getSiblingDB(database);

  db.createUser({
    user: "$MONGO_INITDB_ROOT_USERNAME",
    pwd: "$MONGO_INITDB_ROOT_PASSWORD",
    roles: [{ role: "readWrite", db: database }],
  });
}

print("Creating turnly databases... DONE!");
EOF
