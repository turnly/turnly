#!/bin/bash

set -e

mongo <<EOF
print("Creating turnly databases...");

const databases = [
  "testing-db",
  "branch-management-db",
  "business-data-fields-db",
  "tenancy-db",
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
